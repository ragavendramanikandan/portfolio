const words = [
    "Web Designer",
    "Frontend Developer",
    "UI/UX Designer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[wordIndex];

    if(isDeleting){
        typing.textContent = current.substring(0,charIndex--);
    }else{
        typing.textContent = current.substring(0,charIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === current.length + 1){
        speed = 1800;
        isDeleting = true;
    }

    if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect,speed);
}

typeEffect();

window.addEventListener("scroll",()=>{

    const navbar=document.querySelector(".navbar");

    navbar.classList.toggle("scrolled",window.scrollY>50);

});

// =============================
// EMAIL JS
// =============================

emailjs.init("_ndhRVRFAo1cyLt8S");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.send("service_0qwab69", "template_lzwqltc", {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        message: document.getElementById("message").value

    })

    .then(function () {

        alert("✅ Message Sent Successfully!");

        form.reset();

    })

    .catch(function (error) {

        alert("❌ Failed to send message.");

        console.log(error);

    });

});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
});

// ======================
// MOBILE MENU
// ======================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = "✕";
    }else{
        menuBtn.innerHTML = "☰";
    }

});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = "☰";

    });

});

// ======================
// MOBILE MENU
// ======================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});