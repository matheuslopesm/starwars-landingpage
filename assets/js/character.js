function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

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
    'luke-button': () => characterDescription.innerHTML = 'Nascido em 19 BBY, foi um lendário Mestre Jedi que lutou na Guerra Civil Galáctica durante o reinado do Império. Após a guerra, se tornou uma lenda viva e foi lembrado como um dos maiores Jedi da história. Seu último conflito foi logo após a queda da Nova República, quando usou da força para exibir sua aparência a batalha contra seu sobrinho Kylo Ren, salvando a Resistência da Primeira Ordem.',
    'obiwan-button': () => characterDescription.innerHTML = 'Nascido em 57 BBY, foi um lendário Mestre Jedi integrante da Ordem Jedi nos tempos áureos da República. Como um General, serviu ao Grande Exército durante as Guerras Clônicas. No entanto, mesmo com toda sua glória foi forçado a se exilar durante o Grande Purgo Jedi. ',
    'anakin-button': () => characterDescription.innerHTML = 'Nascido em 41 BBY, foi um lendário sensitivo à Força considerado o Escolhido da Ordem Jedi, que traria equilíbrio à força. Muito conhecido pelo talento com o sabre de luz e a fama de herói durante as Guerras Clônicas, Anakin adotou um alter ego - Darth Vader - após exterminar vários Jedi e instaurar o Império Galático ao lado de Palpatine.',
    'palpatine-button': () => characterDescription.innerHTML = 'Nascido em 84 BBY, foi um humano sensível à Força, o último Supremo Chanceler da República Galáctica e Imperador da Galáxia. Também foi um Lorde Sith, herdeiro da Regra de Dois de Darth Bane. Foi o responsável por executar toda a chacina contra a democracia e os Jedi.'
}

characterButtons.addEventListener('click', characterOption);

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


