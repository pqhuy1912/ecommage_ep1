const menu = document.querySelector('.header-list')
const menuOpen = document.querySelector('.bar-mobile')
const menuClose = document.querySelector('.close-btn')

menuOpen.onclick = function(){
    menu.classList.add('active')
}

menuClose.onclick = function(){
    menu.classList.remove('active')
}

document.onclick = function(e){
    if(!menu.contains(e.target) && !e.target.matches('.bar-mobile')){
        menu.classList.remove('active')
    }
}