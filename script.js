// Mouse 

const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");


// Mouse Circle
const mouseCircleFn = (x,y) => {
    mouseCircle.style.cssText = `top:${y}px;left:${x}px`;
    mouseDot.style.cssText = `top:${y}px;left:${x}px`;
};

document.body.addEventListener("mousemove", (e) =>{
    let x = e.clientX;
    let y = e.clientY;

    mouseCircleFn(x,y);
    animateCircle(e,x,y);
});


// Circle Betaldo
const circles = document.querySelectorAll(".circles");
const mainImg = document.querySelector(".main-circles img");

let mX = 0;
let mY = 0;

const animateCircle = (e,x,y) => {
    if(x < mX){
        circles.forEach(circles => {
            circles.style.left = `75`;
        })
        mainImg.style.left = `85px`;
    } else if(x > mX) {
        circles.forEach(circles => {
            circles.style.left = `-65px`;
        })
        mainImg.style.left = `-75px`;
    }

    if(y < mY){
        circles.forEach(circles => {
            circles.style.top = `65px`;
        })
        mainImg.style.top = `65px`;
    } else if(y > mY) {
        circles.forEach(circles => {
            circles.style.top = `-65px`;
        })
        mainImg.style.top = `-65px`;
    }

    mX = e.clientX
    mY = e.clientY

}
// End Betaldo Circle 

// Navigation
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
    menuIcon.classList.add("show-menu-icon");
    navbar.classList.add("hide-navbar");


if (window.scrollY === 0) {
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
}
});

menuIcon.addEventListener("click", () => {
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
})
// End Navigation


// About Betaldo
const aboutMeText = document.querySelector(".about-me-text");
const aboutMeTextContent = "I am a Website Developer Enthusiast and UI/UX Enthusiast. If you like just contact me :)";

Array.from(aboutMeTextContent).forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    aboutMeText.appendChild(span);

    span.addEventListener("mouseenter",(e) => {
        e.target.style.animation = "aboutMeTextAnim 10s infinite";
    });
});
// End About Betaldo

// Project
const container = document.querySelector(".container");
const projects = document.querySelectorAll(".project");
// const projectHideBtn = document.querySelectorAll(".project-hide-btn");

projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
        project.firstElementChild.style.top = `-${project.firstElementChild.offsetHeight - project.offsetHeight + 20}px`;
    });

    project.addEventListener("mouseleave", () => {
        project.firstElementChild.style.top = "2rem";
    });

//Project Besar Betaldo
project.addEventListener("click", () => {
    const bigImgWrapper = document.createElement("div");
    bigImgWrapper.className = "project-img-wrapper";
    container.appendChild(bigImgWrapper);

    const bigImg = document.createElement("img");
    bigImg.className = "project-img";
    const imgPath = project.firstElementChild.getAttribute("src").split(".")[0];
    bigImg.setAttribute("src", `${imgPath}-big.jpg`);
    bigImg.setAttribute("src", `${imgPath}.png`);
    bigImgWrapper.appendChild(bigImg);
    document.body.style.overflowY = "hidden";

    projectHideBtn.classList.add("change");

    projectHideBtn.onclick = () => {
        projectHideBtn.classList.remove("change");
        bigImgWrapper.remove();
        document.body.style.overflowY = ("scroll");
    }
    
});

});
// End Project Besar Betaldo

// Section 4 Betaldo
document.querySelectorAll(".service-btn").forEach((service) => {
    service.addEventListener("click", (e) => {
        e.preventDefault();

        const serviceText = service.nextElementSibling;
        serviceText.classList.toggle("change");

    });
});

// End Section 4 Betaldo

// Section 5 Betaldo
const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");


formInputs.forEach((input) => {
    input.addEventListener("focus", () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {    
        formHeading.textContent = `Your ${input.placeholder}`;
        formHeading.style.opacity = "1";
        }, 300);
    });

    input.addEventListener("blur", () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {    
        formHeading.textContent = `Contact Me`;
        formHeading.style.opacity = "1";
        }, 300);
    });
});
// End Section 5 Betaldo

// Contact
function sendMessageWA(){
    const urlToWhatsapp = `https://wa.me/6281237600057?text=Halo,saya ${nama.value}, ${email.value}, ${pesan.value}`;
        window.open(urlToWhatsapp, "_blank");
}

// ENd Contact