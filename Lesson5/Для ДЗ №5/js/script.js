let menuItems = document.querySelectorAll(".menu .menu-item"),
    menu = document.querySelector('.menu'),
    title = document.querySelector('#title'),
    column = document.querySelectorAll('.column')[1];


//appending right order   
menu.insertBefore(menuItems[1], menuItems[3]);


//creating menu item 5
let newMenuItem = document.createElement('li');
newMenuItem.innerText = "Пятый пункт";
newMenuItem.classList.add("menu-item");

menu.appendChild(newMenuItem);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

//changing text for title
title.innerText = "Мы продаем только подлинную технику Apple";

column.removeChild(column.querySelector('.adv'));

let answer = prompt("What do you think of Apple products?");

column.querySelector('.prompt').innerText = answer;


