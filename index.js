var showNav = document.querySelector('.show-nav')
var sideNav = document.querySelector('.side-nav')
var hideNav = document.querySelector('.hide-mark')
showNav.addEventListener( 'click', () => {
    sideNav.classList.add('active')
})
hideNav.addEventListener( 'click', () => {
sideNav.classList.remove('active')
})