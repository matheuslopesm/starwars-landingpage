function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}


const planetImages = document.getElementById('planet-img')
const planetButtons = document.getElementById('sub-menu')

const changePlanetImage = {
    'tatooine-button': () => planetImages.src = 'starwars-landingpage/assets/img/destinations/image-tatooine.png',
    'stewjon-button': () => planetImages.src = 'starwars-landingpage/assets/img/destinations/image-stewjon.png',
    'mustafar-button': () => planetImages.src = 'starwars-landingpage/assets/img/destinations/image-mustafar.png',
    'naboo-button': () => planetImages.src = 'starwars-landingpage/assets/img/destinations/image-naboo.png'
}

planetButtons.addEventListener('click', changePlanetImage)




