function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

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


