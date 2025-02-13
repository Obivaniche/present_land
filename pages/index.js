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