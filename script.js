const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

document.addEventListener('DOMContentLoaded', () => {

const testimonialSwiper = new Swiper('.feedback',{ 
    speed: 400,
    loop: true,
    spaceBetween: 30,
    navigation:{
        nextEl: ".btn_next",
        prevEl: ".btn_previous",
    },
});

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
});

let list = document.querySelectorAll('.list .item');

list.forEach(item => {
    item.addEventListener('click', function (event){
        if(item.classList.contains('active')){
            if(event.target.classList.contains('dropdown')){
                item.classList.remove('active');
            }
        }else{
            item.classList.add('active');
        }
    })
})
