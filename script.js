const page = document.querySelector('.page');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const primaryBtn = document.querySelector('.primary-btn');
const closeIcon = document.querySelector('.fa-xmark');

registerLink.addEventListener('click', ()=>{
    page.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    page.classList.remove('active');
});

primaryBtn.addEventListener('click', ()=>{
    page.classList.add('active-btn');
});

closeIcon.addEventListener('click', ()=>{
    page.classList.remove('active-btn');
});