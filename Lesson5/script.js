let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart"),
    wrapper = document.querySelector(".wrapper");


box.style.backgroundColor = 'gray';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'green';
circle[2].style.backgroundColor = 'yellow';



heart.forEach(function(item){
    item.style.backgroundColor = "grey";
});

let div = document.createElement('div'),
    text = document.createTextNode("I was here");

div.classList.add('black');

// div.innerHTML = '<h1>Hello World!</h1>';
div.textContent = "Hello World!";

// document.body.appendChild(div);
// wrapper.appendChild(div);
document.body.insertBefore(div, circle[2]);
wrapper.replaceChild(div, heart[1]);
wrapper.removeChild(heart[0]);

console.log(div);