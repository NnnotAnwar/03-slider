const container = document.querySelector('.container');
const upButton = document.querySelector('.up-btn')
const downButton = document.querySelector('.down-btn')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesNumber = mainSlide.querySelectorAll('div').length
let activeSlideIndex = 0

document.addEventListener('keyup', () => { changeSlide(event.code) })

sidebar.style.top = `-${(slidesNumber - 1) * 100}vh`

upButton.addEventListener('click', () => { changeSlide('up') })
downButton.addEventListener('click', () => { changeSlide('down') })




function changeSlide(direction) {

    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesNumber) { activeSlideIndex = 0 }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) { activeSlideIndex = slidesNumber - 1 }
    } else if (direction === 'ArrowUp') {
        activeSlideIndex++
        if (activeSlideIndex === slidesNumber) { activeSlideIndex = 0 }
    } else if (direction === 'ArrowDown') {
        activeSlideIndex--
        if (activeSlideIndex < 0) { activeSlideIndex = slidesNumber - 1 }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

