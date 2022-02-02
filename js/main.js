const menuToggleIcon = document.getElementById('menu-toggle-icon')
const navMobile = document.getElementById('nav')
const headerElement = document.getElementById('header')
// const menuToggleIcon = document.getElementById('menu-toggle-icon')


const toggleMenu = ()=>{
    navMobile.classList.toggle('active');
    headerElement.classList.toggle('active');
}

menuToggleIcon.addEventListener('click',toggleMenu)

// Add/Remove header border bottom on Scroll
const headerScrollEvent = ()=>{
    if(this.scrollY >= 30 ){
        headerElement.classList.add('active-scroll')
    }else {
        headerElement.classList.remove('active-scroll')
    }
}

window.addEventListener('scroll',headerScrollEvent)