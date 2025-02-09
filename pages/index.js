const main = document.querySelector('.main');
const popup = document.querySelectorAll('.popup');
const popupContact = document.querySelector('.popup-contact');
const buttonContacts = document.querySelectorAll('.button-contact');

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

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    main.classList.remove('main_lock');
};

popup.forEach((popup) =>
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            popup.classList.remove('popup_opened');
            main.classList.remove('main_lock');
        }
    })
);

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