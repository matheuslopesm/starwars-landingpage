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
    'luke-button': () => characterDescription.innerHTML = 'Nascido em 19 BBY, foi um lendário Mestre Jedi que lutou na Guerra Civil Galáctica durante o reinado do Império. Após a guerra, se tornou uma lenda viva e foi lembrado como um dos maiores Jedi da história. Seu último conflito foi logo após a queda da Nova República, quando usou da força para exibir sua aparência a batalha contra seu sobrinho Kylo Ren, salvando a Resistência da Primeira Ordem.',
    'obiwan-button': () => characterDescription.innerHTML = 'Nascido em 57 BBY, foi um lendário Mestre Jedi integrante da Ordem Jedi nos tempos áureos da República. Como um General, serviu ao Grande Exército durante as Guerras Clônicas. No entanto, mesmo com toda sua glória foi forçado a se exilar durante o Grande Purgo Jedi. ',
    'anakin-button': () => characterDescription.innerHTML = 'Nascido em 41 BBY, foi um lendário sensitivo à Força considerado o Escolhido da Ordem Jedi, que traria equilíbrio à força. Muito conhecido pelo talento com o sabre de luz e a fama de herói durante as Guerras Clônicas, Anakin adotou um alter ego - Darth Vader - após exterminar vários Jedi e instaurar o Império Galático ao lado de Palpatine.',
    'palpatine-button': () => characterDescription.innerHTML = 'Nascido em 84 BBY, foi um humano sensível à Força, o último Supremo Chanceler da República Galáctica e Imperador da Galáxia. Também foi um Lorde Sith, herdeiro da Regra de Dois de Darth Bane. Foi o responsável por executar toda a chacina contra a democracia e os Jedi.'
}

characterButtons.addEventListener('click', characterOption);


//Functions os "ships.html"

const shipsImages = document.getElementById('ships-img')
const shipsButtons = document.getElementById('sub-menu')
const shipsNames = document.getElementById('ships-name')
const shipsDescription = document.getElementById('ships-description')

const shipsOption = ( event ) => {
    changeShipsImage[event.target.id]();
    changeShipsName[event.target.id]();
    changeShipsDescription[event.target.id]();    
}

const changeShipsImage = {
    'xwing-button': () => shipsImages.src = './assets/img/ships/img-xwing.png',
    'falcon-button': () => shipsImages.src = './assets/img/ships/img-falcon.png',
    'starfighter-button': () => shipsImages.src = './assets/img/ships/img-starfighter.png',
    'tie-button': () => shipsImages.src = './assets/img/ships/img-tie.png',
}

const changeShipsName = {
    'xwing-button': () => shipsNames.innerHTML = 'X-Wing',
    'falcon-button': () => shipsNames.innerHTML = 'M. Falcon',
    'starfighter-button': () => shipsNames.innerHTML = 'Starfighter',
    'tie-button': () => shipsNames.innerHTML = 'TIE Fighter'
}

const changeShipsDescription = {
    'xwing-button': () => shipsDescription.innerHTML = 'Eram do tipo caça estelar, marcados por suas asas que se assemelhavam a um "X" quando em posição de ataque. Durante a Guerra Civil Galática, a Aliança Rebelde usou em várias batalhas, como nas Batalhas de Yavin e Endor. É também caracterizado como a nave mais utilizada pelo Nobre Mestre Jedi Luke Skywalker em suas batalhas contra o julgo do Império.',
    'falcon-button': () => shipsDescription.innerHTML = 'Foi um cargueiro corelliano usado pelos contrabandistas Han Solo e Chewbacca durante a Guerra Civil Galáctica. Anteriormente foi posse de Lando Calrissian, quem a perdeu para Solo em um jogo de Sabacc.',
    'starfighter-button': () => shipsDescription.innerHTML = 'Durante os últimos anos das Guerras Clônicas, foi pilotado pelo cavaleiro Jedi Anakin Skywalker durante uma missão para resgatar o Supremo Chanceler Sheev Palpatine durante a Batalha de Coruscant. Nessa mesma batalha, a nave foi destruída a bordo da Nave Separatista a qual o Chanceler estava preso.',
    'tie-button': () => shipsDescription.innerHTML = 'Foi uma nave espacial fabricada de forma massiva pelo Império durante a Guerra Civil Galáctica. Eram naves rápidas e ágeis, porém frágeis, muito utilizadas pelos pilotos imperiais, tendo outras variações no seu modelo ao longo do tempo.'
}

shipsButtons.addEventListener('click', shipsOption);

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


