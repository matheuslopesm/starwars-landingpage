function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

// Functions of "destinations.html"
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

//Functions of "character.html"

const characterImages = document.getElementById('character-img')
const characterButtons = document.getElementById('sub-menu')
const characterNames = document.getElementById('character-name')
const characterDescription = document.getElementById('character-description')

const characterOption = ( event ) => {
    changeCharacterImage[event.target.id]();
    changeCharacterName[event.target.id]();
    changeCharacterDescription[event.target.id]();    
}

const changeCharacterImage = {
    'luke-button': () => characterImages.src = './assets/img/characters/img-luke.png',
    'obiwan-button': () => characterImages.src = './assets/img/characters/img-obiwan.png',
    'anakin-button': () => characterImages.src = './assets/img/characters/img-anakin.png',
    'palpatine-button': () => characterImages.src = './assets/img/characters/img-palpatine.png',
}

const changeCharacterName = {
    'luke-button': () => characterNames.innerHTML = 'Luke',
    'obiwan-button': () => characterNames.innerHTML = 'Obi-wan',
    'anakin-button': () => characterNames.innerHTML = 'Anakin',
    'palpatine-button': () => characterNames.innerHTML = 'Palpatine'
}

const changeCharacterDescription = {
    'luke-button': () => characterDescription.innerHTML = 'Homem humano sensível à força, nascido em 19 ABY, foi um lendário Mestre Jedi que lutou na Guerra Civil Galáctica durante o reinado do Império. Após a guerra, se tornou uma lenda viva e foi lembrado como um dos maiores Jedi da história galática. Seu último conflito e importante papel foi logo após a queda da Nova República.',
    'obiwan-button': () => characterDescription.innerHTML = 'Planeta coberto por grama localizado no Sistema Stewjon. É conhecido por ser um dos raros planetas com ar respirável por seres de raça humana. Stewjon foi terra natal de um Jedi bastante conhecido e agraciado, Obi-Wan Kenobi.',
    'anakin-button': () => characterDescription.innerHTML = 'Pequeno planeta vulcânico localizado no setor Atravis, da Orla Exterior. Antes foi um mundo florido, por influência externa se transformou no conhecido local que definiu o reduto final do Conselho Separatista, massacrado pelo recém-nomeado Darth Vader, que travou uma intensa batalha contra seu mestre e deu início ao Império Galático.',
    'palpatine-button': () => characterDescription.innerHTML = 'Uma jóia brilhante localizada na Orla Média, Naboo era conhecido como um centro de paz, com suas belas cidades coexistindo em harmonia. Muitos Naboo pereceram quando a Federação do Comércio lançou uma invasão ao planeta e tomou o controle do governo. Naboo foi terra natal de Padmé Amidala e o Chanceler Palpatine.'
}

characterButtons.addEventListener('click', characterOption);






