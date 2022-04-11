
let cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Função para virar cartas 
function flipCard() {
  if (lockBoard) return;
  

  this.classList.add('flip');

// Checando se as cartas viradas são iguais ou diferentes
if (!hasFlippedCard) {
  hasFlippedCard = true;
  firstCard = this;
  return;
  }

  secondCard = this;
  

  checkForMatch();
}

//Função que checa se as cartas clicadas são iguais 
function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework){
    disableCards();
    return;
    }

    unflipCards();

}

function disableCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

//Desvirando as cartas diferentes 
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    
    resetBoard();
  }, 1300);
  }


  function resetBoard() {

    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  (function shuffle() {
       cards.forEach(card => {
         let ramdomPos = Math.floor(Math.random() * 12);
         card.style.order = ramdomPos;
       });
     })();


    //let EndGame = prompt(String("Deseja jogar novamente? [sim/não]"));
   // if (EndGame === 'sim'){
    //  resetBoard();
   // } else {
    //  alert("Obrigado!")
   // }

cards.forEach(card => card.addEventListener('click', flipCard));

