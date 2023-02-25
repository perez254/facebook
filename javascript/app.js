const btnStoriesScrollLeft = document.querySelector('.container__stories--button--left');
const btnStoriesScrollRight = document.querySelector('.container__stories--button--right');
const storiesScrollContainer = document.querySelector('.container__stories');
btnStoriesScrollLeft.addEventListener('click', () => {
    storiesScrollContainer.scrollBy({left: -80, behavior: 'smooth'})
})
btnStoriesScrollRight.addEventListener('click', () => {
    storiesScrollContainer.scrollBy({left: 80, behavior: 'smooth'})
})