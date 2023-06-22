
const navIcon = document.querySelector("#nav-icon")!
const nextSlideButton = document.querySelector("[data-next]")!
const previousSlideButton = document.querySelector("[data-prev]")!

function moveSlide (currentSlideQuerySelector: String, 
                    nextSlideInLineSiblingProperty: "next"|"previous", 
                    lastSlideInLineQuerySelector: String, 
                    firstSlideInLineQuerySelector: String) {

    let currentSlide = document.querySelector(`${currentSlideQuerySelector}`)!
    let lastSlideInLine = document.querySelector(`${lastSlideInLineQuerySelector}`)!
    let firstSlideInLine = document.querySelector(`${firstSlideInLineQuerySelector}`)!
    
    currentSlide.classList.toggle("invisible")
    if (currentSlide === lastSlideInLine) {
        firstSlideInLine.classList.toggle("invisible")
    } else {
    let nextSlideInLine = nextSlideInLineSiblingProperty === "next"? currentSlide.nextElementSibling: currentSlide.previousElementSibling
        nextSlideInLine!.classList.toggle("invisible")
    }

}

function toggleNav () {
    const header = document.querySelector("header")!
    const logo = document.querySelector("#logo")!
    const nav = document.querySelector("nav")!
    const navLinks = document.querySelector("#nav-links")!

    header.toggleAttribute("data-header-background-toggle")
    logo.toggleAttribute("logo-hide")
    navIcon.toggleAttribute("data-nav-icon-opened")
    nav.toggleAttribute("data-nav-opened")
    navLinks.toggleAttribute("data-nav-links-opened")
}

function getNextSlide() {
    moveSlide("[data-pictures]:not(.invisible)", "next", "[data-pictures]:last-of-type", "[data-pictures]:first-of-type")
    moveSlide("[data-slide-text]:not(.invisible)", "next", "[data-slide-text]:last-of-type", "[data-slide-text]:first-of-type")
}

function getPreviousSlide() {
    moveSlide("[data-pictures]:not(.invisible)", "previous", "[data-pictures]:first-of-type", "[data-pictures]:last-of-type")
    moveSlide("[data-slide-text]:not(.invisible)", "previous", "[data-slide-text]:first-of-type", "[data-slide-text]:last-of-type")   
}

function slideShow () {
    setInterval(getNextSlide, 8000)
}

slideShow()

navIcon.addEventListener("click", (toggleNav))
nextSlideButton.addEventListener("click", (getNextSlide))
previousSlideButton.addEventListener("click", (getPreviousSlide))
