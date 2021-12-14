let EleHeader = document.querySelector("header");
let ActiveHeader = document.querySelector(".active-Header")
// Header
window.onscroll = function () {
    console.log()
    if (window.scrollY > 1000) {
        EleHeader.classList.add("active-Header")
        EleHeader.setAttribute("style" , "transform: translateY(0px);")
    } else if (window.scrollY > 200) {
        EleHeader.setAttribute("style" , "transform: translateY(-100px);")
    } else {
        EleHeader.classList.remove("active-Header")
        EleHeader.setAttribute("style" , "transform: translateY(0px);")
    }
}
// End Header
let ClickUp = document.querySelector(".click-up")
let DarkMode = document.querySelector(".dark-mode")
let Click = document.querySelector(".click")

ClickUp.onclick = function () {
    DarkMode.setAttribute("style", "transform: translateX(75px)")
    Click.setAttribute("style", "transform: rotate(180deg); margin: 0px 0px 0 0;")
    ClickUp.setAttribute("style", "transform: translateX(10px);")
}
Click.onclick = function () {
    if (Click.getAttribute("style")) {
        ClickUp.onclick = function () {
            DarkMode.setAttribute("style", "")
            ClickUp.setAttribute("style", "")
            Click.setAttribute("style", "")
        }
    }
    if (Click.getAttribute("style") === "") {
        ClickUp.onclick = function () {
            DarkMode.setAttribute("style", "transform: translateX(75px)")
            Click.setAttribute("style", "transform: rotate(180deg); margin: 0px 0px 0 0;")
            ClickUp.setAttribute("style", "transform: translateX(10px);")
        }
    }
}
// side menu

let clickedSide = document.querySelector(".clicked-menu i")
let slideMenu = document.querySelector(".slide-menu")
let remslide = document.querySelector(".remslide")

clickedSide.onclick = function () {
    slideMenu.setAttribute("style" , "display: block; right: -1px; transition: 0.6s ease-in-out;")
    console.log(slideMenu.getAttribute("style"))
}

remslide.onclick = function () {
    slideMenu.setAttribute("style" , "display: none; right: -350px;")
}

// Show Feature Top

let imgFeatureRight = document.querySelector(".main-top-features img")
let svgFeatureRight = document.querySelector(".main-top-features svg")
let rightFeaturesRight = document.querySelector(".main-top-features .right-features")

// Show Feature Bot

let imgFeaturesLeft = document.querySelector(".main-bot-features img")
let rightFeaturesLeft = document.querySelector(".main-bot-features .right-features")

document.onscroll = function () {
    if (window.scrollY > 1450) {
        imgFeatureRight.setAttribute("style", "transform: translate(0px , 150px); opacity: 1;")
        svgFeatureRight.setAttribute("style", "left:-400px; opacity: 1;")
        rightFeaturesRight.setAttribute("style", "transform:translate(0px,150px); opacity:1;")

        imgFeaturesLeft.setAttribute("style" , "transform: translate(0px,150px); opacity:1; ")
        rightFeaturesLeft.setAttribute("style" , "transform: translate(-150px,150px); opacity:1; ")
    } else if (window.scrollY > 1050) {
        imgFeatureRight.setAttribute("style", "transform: translateX(-600px); opacity:0;")
        svgFeatureRight.setAttribute("style", "left:-1400px; opacity: 0;")
        rightFeaturesRight.setAttribute("style", "transform: translate(600px,150px); opacity: 0;")
        
        imgFeaturesLeft.setAttribute("style" , "transform: translate(600px,150px); opacity:0; ")
        rightFeaturesLeft.setAttribute("style" , "transform: translate(-700px,150px); opacity:0; ")
    }
}
