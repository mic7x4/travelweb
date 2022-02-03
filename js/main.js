const menuToggleIcon = document.getElementById('menu-toggle-icon')
const navMobile = document.getElementById('nav')
 const headerElement = document.getElementById('header')
const navLinks = document.querySelectorAll('.nav-mobile .list-link')

console.log(navLinks);


const toggleMenu = ()=>{
    navMobile.classList.toggle('active');
    headerElement.classList.toggle('active');
}

menuToggleIcon.addEventListener('click',toggleMenu)

// Add/Remove header border bottom on Scroll
const headerScrollEvent = ()=>{
    if(this.scrollY >= 30 ){
        headerElement.classList.add('active-scroll');
    }else {
        headerElement.classList.remove('active-scroll');
    }
}

window.addEventListener('scroll',headerScrollEvent)

// Add selected link styles
navLinks.forEach(link => link.addEventListener('click', () =>{
    navMobile.classList.remove('active');
    headerElement.classList.remove('active')

    let current = document.getElementsByClassName('current')
    current[0].className = current[0].className.replace(' current', '')
    link.className += ' current'
} ))