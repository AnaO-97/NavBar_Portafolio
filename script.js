/* ---------------------SHOW MENU------------------------ */
const headerToggle = document.getElementById('header-toggle'),
      main     = document.getElementById('main'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(headerToggle){
    headerToggle.addEventListener('click', () =>{
        main.classList.add('show-menu')
    })
}

/* ---------------------REMOVE MENU------------------------ */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        main.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const main = document.getElementById('main')
    // When we click on each nav__link, we remove the show-menu class
    main.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))