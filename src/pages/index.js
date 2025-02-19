// Стили
import './index.css';

// импорт картинок
import imageBox from '../images/card-1.png';
import imagePoster from '../images/card-2.png';
import imagePack from '../images/card-3.png';
import imageCan from '../images/card-3.png';

// Массив данных для карточек
const initialCards = [{
    name: 'Vision studio',
    link: imageBox
},
{
    name: 'Vision studio',
    link: imagePoster
},
{
    name: 'Vision studio',
    link: imagePack
},
{
    name: 'Vision studio',
    link: imageCan
},
];

// Попап
// Элементы попапа
const main = document.querySelector('.main');
const popup = document.querySelectorAll('.popup');
const popupContact = document.querySelector('.popup-contact');
const buttonContacts = document.querySelectorAll('.button-contact');

// Находим кнопки отрытия попапа и открываем его
if (buttonContacts.length > 0) {
    buttonContacts.forEach((buttonContact) => {
        buttonContact.addEventListener('click', onButtonContact);
    });

    function onButtonContact(evt) {
        const buttonContact = evt.target;
        if (buttonContact) {
            popupContact.classList.add('popup_opened');
            main.classList.add('main_lock');
            evt.preventDefault();
        }
    }
};

// Зкрываем попап
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    main.classList.remove('main_lock');
};

// Закрываем попап клавишей Esc
popup.forEach((popup) =>
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            popup.classList.remove('popup_opened');
            main.classList.remove('main_lock');
        }
    })
);

// Закрываем попап кликом на кнопку или вне окна
popup.forEach((popup) =>
    popup.addEventListener('mousedown', (evt) => {
        if (
            evt.target.classList.contains('popup') ||
            evt.target.classList.contains('popup__close-button')
        ) {
            closePopup(popup);
        }
    })
);

// Форма
// Находим форму
const form = document.querySelector('.form');
// Находим кнопку отправки и отключаем ее
const button = form.querySelector('.button_form');
button.classList.add('form__submit-button_disabled');

// Очищаем форму
form.addEventListener('submit', (evt) => {
    evt.target.reset();
});

// Сериализируем поля формы
function serializeForm(formNode) {
    return new FormData(formNode);
};

// Отправка данных
async function sendData(data) {
    return await fetch('/api/apply/', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: data,
    });
};

// Успех
function onSuccess() {
    alert('Ваша заявка отправлена!');
};

// Неуспех
function onError() {
    alert('Ваша заявка отклонена!');
};

// Лоадер и сообщения
async function handleFormSubmit(evt) {
    evt.preventDefault();
    toggleLoader();
    const data = serializeForm(evt.target);
    const { status } = await sendData(data);
    toggleLoader();

    if (status === 200) {
        onSuccess(evt.target);
    } else {
        onError(evt.target);
    };
};

// Слушатель отправки формы
form.addEventListener('submit', handleFormSubmit);

// Активация лоадера
function toggleLoader() {
    const loader = document.querySelector('.form__loader');
    loader.classList.toggle('form__loader_active');
};

// Включение кнопки отправки при валидации
function checkValidity(evt) {
    const formNode = evt.target.form;
    const isValid = formNode.checkValidity();

    if (isValid) {
        button.classList.remove('form__submit-button_disabled');
        button.classList.add('form__submit-button_active');
    };
};

// Слушатель кнопки отправки
form.addEventListener('input', checkValidity);

// Определяем устройство
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Отключаем ховер эффекты
    const linksFooter = document.querySelectorAll('.footer__link');
    if (linksFooter.length > 0) {
        linksFooter.forEach((linkFooter) => {
            linkFooter.classList.add('footer__link_mobile');
        });
    };

    const linksMenu = document.querySelectorAll('.menu__link');
    if (linksMenu.length > 0) {
        linksMenu.forEach((linkMenu) => {
            linkMenu.classList.add('menu__link_mobile');
        });
    };

    const containersMenulink = document.querySelectorAll('.menu__link-container');
    if (containersMenulink.length > 0) {
        containersMenulink.forEach((containerMenulink) => {
            containerMenulink.classList.add('menu__link-container_mobile');
        });
    };

    const linksSocial = document.querySelectorAll('.socials__link');
    if (linksSocial.length > 0) {
        linksSocial.forEach((link) => {
            link.classList.add('socials__link_mobile');
        });
    };

    const stars = document.querySelectorAll('.star');
    if (stars.length > 0) {
        stars.forEach((star) => {
            star.classList.add('star_mobile');
        });
    };

    const buttons = document.querySelectorAll('.button');
    if (buttons.length > 0) {
        buttons.forEach((button) => {
            button.classList.add('button_mobile');
            form.querySelector('.button').classList.remove('button_mobile');
        });
    };

    const galleryLinks = document.querySelectorAll('.gallery__hover-link');
    if (galleryLinks.length > 0) {
        galleryLinks.forEach((galleryLink) => {
            galleryLink.classList.add('gallery__hover-link_mobile');
        });
    };

    const linkPagination = document.querySelector('.pagination__link');
    if (linkPagination !== null) {
        linkPagination.classList.add('pagination__link_mobile');
    }

    const linkPaginationContaner = document.querySelector('.pagination__link-container');
    if (linkPaginationContaner !== null) {
        linkPaginationContaner.classList.add('pagination__link-container_mobile');
    }

    const paginationButtonPrev = document.querySelector('.pagination__button_prev');
    if (paginationButtonPrev !== null) {
        paginationButtonPrev.innerHTML = "<div class='pagination__button pagination__button_mobile-prev'><h3 class='subtitle subtitle_pagination'>Prev</h3></div>";
    };

    const paginationButtonNext = document.querySelector('.pagination__button_next');
    if (paginationButtonNext !== null) {
        paginationButtonNext.innerHTML = "<div class='pagination__button pagination__button_mobile-next'><h3 class='subtitle subtitle_pagination'>Next</h3></div>";
    };
};

// Находим шаблон карточки Template и получаем его содержимое
const cardTemplate = document.querySelector('#card-template').content;

// Находим блок в котором будет использован Template
const cardGrid = document.querySelector('.gallery__grid_single-work');

// Используем массив для заполнения карточек созданных методом Template
initialCards.forEach(function (cardInfo) {

    // Клонируем содержимое тега template
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    // Наполняем блоки шаблона Template содержимым массива
    cardElement.querySelector('.gallery__card-img_single-work').src = cardInfo.link;
    cardElement.querySelector('.gallery__card-img_single-work').alt = cardInfo.name;

    // Отображаем карточки на странице
    cardGrid.append(cardElement);
});

// Картинки
// Попап с картинкой
const popupImg = document.querySelector('.popup-img');

// Находим поля попапа с картинкой
const popupImgLink = document.querySelector('.popup__img');
const popupImgTitle = document.querySelector('.popup__discripton');

// Обработчик открытия попапа с картинкой
function openPopupImg() {
    popupImg.classList.add('popup_opened');
  }

// Открываем картинку fullscreen
function openImgFullscreen(evt) {
    if (evt.target.classList.contains('gallery__card-img_single-work')) {
      popupImgLink.src = evt.target.src;
      popupImgTitle.textContent = evt.target.closest('.card').querySelector('.gallery__card-img_single-work').alt;
      main.classList.add('main_lock');
      openPopupImg();
      };
    }
  
  // Прикрепляем обработчик к карточкам
  cardGrid.addEventListener('click', openImgFullscreen);
