const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

function handleClickOutside(event) {
    if (!wrapper.contains(event.target) && event.target !== btnPopup) {
        wrapper.classList.remove('active-popup', 'active');
        document.removeEventListener('click', handleClickOutside);
    }
}

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active');
    document.addEventListener('click', handleClickOutside);
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup', 'active');
    document.removeEventListener('click', handleClickOutside);
});