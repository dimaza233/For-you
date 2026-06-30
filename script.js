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
    image:"photo1.jpg.jpeg",
    text:"Мы ❤️"
},
{
    image:"photo2.jpg.jpeg",
    text:"Ещё одна история..."
},
{
    image:"photo3.jpg.png",
    text:"И ещё одно воспоминание."
},
{
    image:"photo4.jpg.jpeg",
    text:"Спасибо за все моменты."
},
{
    image:"photo5.jpg.jpeg",
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

// ===============================
// Финальные эффекты
// ===============================

// Небольшое мерцание звезд

const stars = document.getElementById("stars");

setInterval(() => {

    stars.style.opacity = 0.65 + Math.random() * 0.35;

}, 2000);


// Плавное появление письма

const paragraphs = document.querySelectorAll("#letterText p");

paragraphs.forEach((p, index) => {

    p.style.opacity = "0";

    p.style.transform = "translateY(15px)";

    p.style.transition = ".6s";

    setTimeout(() => {

        p.style.opacity = "1";

        p.style.transform = "translateY(0)";

    }, 250 * index);

});


// Эффект падающей звезды

function shootingStar(){

    const star = document.createElement("div");

    star.style.position = "fixed";
    star.style.width = "3px";
    star.style.height = "3px";
    star.style.background = "white";
    star.style.borderRadius = "50%";
    star.style.boxShadow = "0 0 15px white";

    star.style.left = (Math.random()*window.innerWidth) + "px";
    star.style.top = "-20px";

    star.style.transition = "2s linear";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.style.transform="translate(-250px,350px)";
        star.style.opacity="0";

    },50);

    setTimeout(()=>{

        star.remove();

    },2200);

}

setInterval(shootingStar,7000);


// Финальное сообщение

console.log("❤️ Для Валерии. Сделано Дмитрием.");
