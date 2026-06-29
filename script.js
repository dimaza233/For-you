const screens = document.querySelectorAll(".screen");

const startButton = document.getElementById("startButton");
const continueStory = document.getElementById("continueStory");
const openQuestion = document.getElementById("openQuestion");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const typingText = document.getElementById("typingText");

const envelope = document.querySelector(".envelope-front");
const letter = document.querySelector(".letter");

const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const nextPhoto = document.getElementById("nextPhoto");

const photos = [
{
    image:"photos/photo1.jpg",
    text:"Мы ❤️"
},
{
    image:"photos/photo2.jpg",
    text:"Ещё одна история..."
},
{
    image:"photos/photo3.jpg",
    text:"И ещё одно воспоминание."
},
{
    image:"photos/photo4.jpg",
    text:"Спасибо за все моменты."
},
{
    image:"photos/photo5.jpg",
    text:"Самая красивая ❤️"
}
];

let currentPhoto = 0;

function showScreen(id){

    screens.forEach(screen=>{

        screen.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}

const story =

`Иногда кажется, что время летит слишком быстро.

Но если остановиться хотя бы на минуту...

Можно вспомнить, сколько всего уже произошло.

Спасибо тебе...

За время.

За поддержку.

За улыбки.

За наши вечера.

За наши прогулки.

За всё то, что было.

И за всё, что ещё впереди. ❤️`;

let i = 0;

function typeStory(){

    if(i < story.length){

        typingText.innerHTML += story.charAt(i);

        i++;

        setTimeout(typeStory,35);

    }

}

startButton.onclick = ()=>{

    showScreen("story");

    typeStory();

};

continueStory.onclick = ()=>{

    showScreen("gallery");

};

nextPhoto.onclick = ()=>{

    currentPhoto++;

    if(currentPhoto>=photos.length){

        showScreen("letter");

        return;

    }

    galleryImage.src=photos[currentPhoto].image;

    galleryCaption.innerHTML=photos[currentPhoto].text;

};

envelope.onclick=()=>{

    letter.classList.add("show");

};
openQuestion.onclick = () => {

    showScreen("question");

};

// Убегающая кнопка "Нет"

function moveNoButton(){

    const x = Math.random() * (window.innerWidth - 160);

    const y = Math.random() * (window.innerHeight - 80);

    noButton.style.position = "fixed";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

}

noButton.addEventListener("touchstart", moveNoButton);
noButton.addEventListener("mouseover", moveNoButton);

// Нажатие "Да"

yesButton.onclick = () => {

    showScreen("finish");

    createHearts();

};

// Создание сердечек

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize = (14 + Math.random()*22) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

function createHearts(){

    setInterval(createHeart,250);

}

// Обновление фотографий

galleryImage.src = photos[0].image;
galleryCaption.innerHTML = photos[0].text;
