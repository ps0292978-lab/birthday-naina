// ===== Elements =====
const pages = document.querySelectorAll(".page");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const celebrateBtn = document.getElementById("celebrateBtn");

const countdownPage = document.getElementById("countdownPage");
const storyPage = document.getElementById("storyPage");
const letterPage = document.getElementById("letterPage");
const celebrationPage = document.getElementById("celebrationPage");

const countNumber = document.getElementById("countNumber");
const photo = document.getElementById("photo");
const note = document.getElementById("note");
const title = document.getElementById("photoTitle");

let current = 0;

// ===== Photos =====
const photos = [
"https://cdn.phototourl.com/free/2026-07-21-80cb2095-7095-4134-b933-9f5ab43ab87d.jpg",
"https://cdn.phototourl.com/free/2026-07-21-63f975fc-db35-4d53-95b9-d1788e1980ca.jpg",
"https://cdn.phototourl.com/free/2026-07-21-a7d22aa6-53f6-4391-983a-00864d03503d.jpg",
"https://cdn.phototourl.com/free/2026-07-21-4bb1a70d-d095-422b-885a-c4b04d58afcb.jpg",
"https://cdn.phototourl.com/free/2026-07-21-aa6f7c9d-f9f0-4c34-9ede-794b46c411ce.jpg",
"https://cdn.phototourl.com/free/2026-07-21-d5f6c653-ff99-4735-80ad-c8a062525d5d.jpg",
"https://cdn.phototourl.com/free/2026-07-21-3921484c-557e-4405-8402-35c87eae0288.jpg",
"https://cdn.phototourl.com/free/2026-07-21-7a2dbbef-59ec-4d79-8f10-3ba61c3e356b.jpg",
"https://cdn.phototourl.com/free/2026-07-21-df76ee9b-99e2-4050-a3d8-19dc1e33e227.jpg"
];

// ===== Notes =====
const notes = [
"❤️ Happy Birthday Naina! Aaj ka din sirf tumhare liye hai.",
"😊 Tumhari smile kisi bhi din ko beautiful bana deti hai.",
"🌸 Hamesha aise hi hasta rehna.",
"💕 Har photo ek pyari memory hai.",
"💖 Khush rehna... bas yehi wish hai.",
"✨ Life tumhe duniya ki saari khushiyan de.",
"🎂 Never stop smiling.",
"🥰 You are truly special.",
"❤️ Thank you for being an amazing person."
];

function showPage(page){
    pages.forEach(p=>p.classList.remove("active"));
    page.classList.add("active");
}

function loadPhoto(){
    photo.src = photos[current];
    title.innerHTML = `Memory ${current+1} / ${photos.length}`;
    note.innerHTML = notes[current];
}
// ======================================
// START BUTTON
// ======================================

startBtn.addEventListener("click", () => {
    showPage(countdownPage);
    startCountdown();
});

// ======================================
// COUNTDOWN
// ======================================

function startCountdown() {

    let count = 3;

    countNumber.innerHTML = count;

    const timer = setInterval(() => {

        count--;

        if (count > 0) {

            countNumber.innerHTML = count;

        } else if (count === 0) {

            countNumber.innerHTML = "❤️";

        } else {

            clearInterval(timer);

            current = 0;

            loadPhoto();

            showPage(storyPage);

        }

    }, 1000);

}

// ======================================
// NEXT BUTTON
// ======================================

nextBtn.addEventListener("click", () => {

    photo.style.opacity = "0";

    setTimeout(() => {

        current++;

        if (current < photos.length) {

            loadPhoto();

            photo.style.opacity = "1";

        } else {

            showPage(letterPage);

        }

    }, 300);

});

// ======================================
// CELEBRATE BUTTON
// ======================================

celebrateBtn.addEventListener("click", () => {

    showPage(celebrationPage);

});

// ======================================
// FIRST LOAD
// ======================================

showPage(document.getElementById("welcome"));
// ======================================
// FLOATING HEARTS
// ======================================

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const emojis = ["❤️","💖","💕","💗","💝"];

    heart.innerHTML =
    emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left = Math.random()*100 + "%";

    heart.style.animationDuration =
    (4 + Math.random()*3) + "s";

    heart.style.fontSize =
    (18 + Math.random()*18) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },7000);

}

setInterval(createHeart,500);

// ======================================
// PHOTO ANIMATION
// ======================================

function animatePhoto(){

    photo.style.transform="scale(.92)";
    photo.style.opacity="0";

    setTimeout(()=>{

        photo.style.transform="scale(1)";
        photo.style.opacity="1";

    },250);

}

// ======================================
// LOAD PHOTO
// ======================================

function loadPhoto(){

    photo.src = photos[current];

    title.innerHTML =
    `Memory ${current+1} / ${photos.length}`;

    note.innerHTML =
    notes[current];

    animatePhoto();

}

// ======================================
// HEART BURST
// ======================================

function heartBurst(){

    for(let i=0;i<12;i++){

        setTimeout(createHeart,i*80);

    }

}

nextBtn.addEventListener("click",heartBurst);

// ======================================
// ENTER KEY SUPPORT
// ======================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        if(storyPage.classList.contains("active")){

            nextBtn.click();

        }

    }

});
// ======================================
// FINAL LETTER EFFECT
// ======================================

const finalLetter = document.getElementById("finalLetter");

const message = `Happy Birthday Naina ❤️

I hope your life is always filled with happiness,
beautiful memories and endless smiles.

May every dream of yours come true.
Stay blessed, stay happy and never stop smiling.

Thank you for being such a wonderful person.

Have the most amazing birthday. 🎂💖`;

function typeLetter(){

let i = 0;

finalLetter.innerHTML = "";

const typing = setInterval(()=>{

finalLetter.innerHTML += message.charAt(i);

i++;

if(i >= message.length){

clearInterval(typing);

}

},35);

}

// ======================================
// LETTER PAGE
// ======================================

nextBtn.addEventListener("click",()=>{

if(current >= photos.length-1){

setTimeout(()=>{

showPage(letterPage);

typeLetter();

},350);

}

});

// ======================================
// CELEBRATION
// ======================================

celebrateBtn.addEventListener("click",()=>{

showPage(celebrationPage);

for(let i=0;i<120;i++){

setTimeout(createHeart,i*70);

}

});

// ======================================
// PHOTO PRELOAD
// ======================================

photos.forEach(src=>{

const img = new Image();

img.src = src;

});

// ======================================
// START
// ======================================

showPage(document.getElementById("welcome"));

loadPhoto();
