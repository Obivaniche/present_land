// Попап
// Элементы попапа
const main = document.querySelector('.main');
const popup = document.querySelectorAll('.popup');
const popupContact = document.querySelector('.popup-contact');
const buttonContacts = document.querySelectorAll('.button-contact');

// Находим кнопки отрытия попапа
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

// Очищаем форму
form.addEventListener('submit', (evt) => {
    evt.target.reset();
});

// Отправка формы
function serializeForm(formNode) {
    return new FormData(formNode);
};

async function sendData(data) {
    return await fetch('/api/apply/', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: data,
    });
};

async function handleFormSubmit(evt) {
    evt.preventDefault();
  
    const data = serializeForm(evt.target);
    const response = await sendData(data);
  }

form.addEventListener('submit', handleFormSubmit);