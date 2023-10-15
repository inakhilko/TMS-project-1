const burgerOpenedClass = 'header--burger-opened';

const header = document.querySelector('header')

const burger = document.querySelector('.menu-btn');

burger.addEventListener('click',()=>{
    header.classList.toggle(burgerOpenedClass);

    const isOpened = header.classList.contains(burgerOpenedClass);
console.log(isOpened)
    if(isOpened){
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

})

const navItems = document.querySelectorAll('.navigation__item');

navItems.forEach((item)=>{
    item.addEventListener('click',()=>{
        header.classList.remove(burgerOpenedClass)
    })
})