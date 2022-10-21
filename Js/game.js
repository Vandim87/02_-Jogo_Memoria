const grid = document.querySelector('.grid')

const machine = [
'caminhao',
'empilhadeira',
'estrada',
'guindaste',
'guindauto',
'manipulador',
'onibus',
'plataforma',
'torre',
'trator',];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className
    return element;}

let firstCard = '';
let secondCard = '';

const checkEndGame = () =>
{
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 20)
    {alert('Parabéns, voçê ganhou!!!')}
}

const checkCards = () => 
{
    const firstcharacter = firstCard.getAttribute('data-character');
    const secondcharacter = secondCard.getAttribute('data-character');

    if (firstcharacter === secondcharacter)
    {
        firstCard.firsChild.classList.add('disabled-card');
        secondCard.firsChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
    }
    else 
    {
     setTimeout(() => {
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard = '';
        secondCard = '';

     }, 500);  
    }
}

const revealCard = ({target}) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    }
    else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
}

const createCard = (machine) => 
{
const card = createElement('div', 'card');
const front = createElement('div', 'face front');
const back = createElement('div', 'face back');

front.style.backgroundImage = `url(../imagens/${machine}.png)`;

card.appendChild(front);
card.appendChild(back);

card.addEventListener('click', revealCard);
//card.setAttribute('data-character', machine)

return card;
}

const loadGame = () => 
{
    const duplicateMachine = [...machine, ...machine];

    const shuffledArray = duplicateMachine.sort(() => Math.random() -0,5);

    shuffledArray.forEach((machine) => 
    {const card = createCard(machine);
    grid.appendChild(card);});
}

loadGame();

//Inicio do cronometro
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    
    setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if(--timer <0){
            timer = duration
        }
    }, 1000);

}

//inicio do script para criação do cronometro
window.onload = function(){
    var duration = 60 * 4;
    var display = document.querySelector("#timer");
    
    startTimer(duration, display);
} 
//fim do script para criação do cronometro
