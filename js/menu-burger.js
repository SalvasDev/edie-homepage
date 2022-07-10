const menu = document.getElementById('container-menu');
const close = document.getElementById('close');
const showMenu = document.getElementById('showMenuMobile');
const a =  document.getElementById('showMenuMobile')

menu.onclick = mostrarMenu;
close.onclick = hide;
a.onclick = hide;




function mostrarMenu(e) {
    e.preventDefault();
    menu.style.padding = '46px 26px 220vw 220vw';
    showMenu.style.display = 'flex';  
    close.style.display = 'block'; 
}   

function hide() {
    menu.style.padding = '46px 26px 52px 52px';
    close.style.display = 'none';
    showMenu.style.display = 'none';
}




/*  Menu animado probar luego */


// document.querySelector(".bar__burger").addEventListener("click", animateBars);

// var line1__bars = document.querySelector(".line1__burger");
// var line2__bars = document.querySelector(".line2__burger");
// var line3__bars = document.querySelector(".line3__burger");
// var container__burger = document.querySelector(".bar__burger");


// function animateBars() {
//     line1__bars.classList.toggle("activeline1__burger");
//     line2__bars.classList.toggle("activeline2__burger");
//     line3__bars.classList.toggle("activeline3__burger");

//     container__burger.classList.toggle("showMenuMobile");
// }

