/* ============================= */
/* MOBILE MENU */
/* ============================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* ============================= */
/* CLOSE MENU AFTER CLICK */
/* ============================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* ============================= */
/* CERTIFICATE POPUP */
/* ============================= */

function openCertificate(file){

    document.getElementById("certificateModal").style.display = "block";

    document.getElementById("certificateFrame").src = file;

}

function closeCertificate(){

    document.getElementById("certificateModal").style.display = "none";

    document.getElementById("certificateFrame").src = "";

}

/* Close popup when clicking outside */

window.onclick = function(event){

    let modal = document.getElementById("certificateModal");

    if(event.target == modal){

        closeCertificate();

    }

}

/* ============================= */
/* SCROLL TO TOP BUTTON */
/* ============================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }
    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ============================= */
/* ACTIVE NAVIGATION */
/* ============================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* ============================= */
/* HERO FADE-IN */
/* ============================= */

window.addEventListener("load", () => {

    document.querySelector(".hero").classList.add("show");

});

/* ============================= */
/* SIMPLE CARD ANIMATION */
/* ============================= */

const cards = document.querySelectorAll(

".skill-card,.project-card,.edu-card,.certificate-card,.coding-card"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    observer.observe(card);

});