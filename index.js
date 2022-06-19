var hamburgerBtn = document.querySelector('.hamburger-btn')
var hamburgerMenu = document.querySelector('.hamburger-menu')

var isOpen = false

//Function for Launching Menu
function launchMenu(){
    hamburgerMenu.classList.add('show-menu')
    hamburgerBtn.removeAttribute('aria-expanded', false)
    hamburgerBtn.setAttribute('aria-expanded', true)
    isOpen = true
}

//Function for Closing Menu
function closeMenu(){
    hamburgerMenu.classList.remove('show-menu')
    hamburgerBtn.setAttribute('aria-expanded', false)
    hamburgerBtn.focus()
    isOpen = false
}

//Click Hamburger Button to Toggle Menu
hamburgerBtn.onclick = function(e) {
    if (isOpen){
        closeMenu()
    } else{
        launchMenu()
    }
}

//Click event for clicking outside of the navigation to close menu
document.onclick = function (e){
    if(hamburgerMenu.contains(e.target) || e.target === hamburgerBtn){
    return}
    closeMenu()   
}

//Escape key to close menu and tab button to go back to hamburgerbtn on navigation loop
document.onkeyup = function (e) {
    if (e.key === 'Tab' && hamburgerMenu.classList.contains('show-menu') && !hamburgerMenu.contains(document.activeElement)){
        hamburgerBtn.focus()
    }
    else if (e.key === 'Escape'){
        closeMenu ()
    }
}
