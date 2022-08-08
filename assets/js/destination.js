function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

const planetImages = document.getElementById('planet-img')
const planetButtons = document.getElementById('sub-menu')
const planetNames = document.getElementById('planet-name')
const planetDescription = document.getElementById('planet-description')

const planetOption = ( event ) => {
    changePlanetImage[event.target.id]();
    changePlanetName[event.target.id]();
    changePlanetDescription[event.target.id]();   
}

const changePlanetImage = {
    'tatooine-button': () => planetImages.src = './assets/img/destinations/image-tatooine.png',
    'stewjon-button': () => planetImages.src = './assets/img/destinations/image-stewjon.png',
    'mustafar-button': () => planetImages.src = './assets/img/destinations/image-mustafar.png',
    'naboo-button': () => planetImages.src = './assets/img/destinations/image-naboo.png',
}

const changePlanetName = {
    'tatooine-button': () => planetNames.innerHTML = 'Tatooine',
    'stewjon-button': () => planetNames.innerHTML = 'Stewjon',
    'mustafar-button': () => planetNames.innerHTML = 'Mustafar',
    'naboo-button': () => planetNames.innerHTML = 'Naboo'
}

const changePlanetDescription = {
    'tatooine-button': () => planetDescription.innerHTML = 'Planeta desértico localizado nos Territórios da Orla Exterior. Devido à falta de água superficial, muitos residentes do planeta drenavam água da atmosfera através de fazendas de umidade. Tatooine foi o terra natal de Anakin Skywalker, O Escolhido, e seu filho, Luke Skywalker.',
    'stewjon-button': () => planetDescription.innerHTML = 'Planeta coberto por grama localizado no Sistema Stewjon. É conhecido por ser um dos raros planetas com ar respirável por seres de raça humana. Stewjon foi terra natal de um Jedi bastante conhecido e agraciado, Obi-Wan Kenobi.',
    'mustafar-button': () => planetDescription.innerHTML = 'Pequeno planeta vulcânico localizado no setor Atravis, da Orla Exterior. Antes foi um mundo florido, por influência externa se transformou no conhecido local que definiu o reduto final do Conselho Separatista, massacrado pelo recém-nomeado Darth Vader, que travou uma intensa batalha contra seu mestre e deu início ao Império Galático.',
    'naboo-button': () => planetDescription.innerHTML = 'Uma jóia brilhante localizada na Orla Média, Naboo era conhecido como um centro de paz, com suas belas cidades coexistindo em harmonia. Muitos Naboo pereceram quando a Federação do Comércio lançou uma invasão ao planeta e tomou o controle do governo. Naboo foi terra natal de Padmé Amidala e o Chanceler Palpatine.'
}

planetButtons.addEventListener('click', planetOption);

ScrollReveal({
origin: 'left',
distance: '50px',
duration: 900
}).reveal(` 
    #planet-img,
    #character-img,
    #ships-img,
    #planet-name,
    #character-name,
    #ships-name
`)


