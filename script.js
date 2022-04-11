
let cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


//Distribuição das cartas de acordo com o valor escolhido pelo usuário

let numberOfCards = prompt("Escolha o número de cartas PARES entre 4 e 14: ");
while (Number(numberOfCards)%2 !== 0 || Number(numberOfCards) < 4 || Number(numberOfCards) > 14) { 
  numberOfCards = prompt("Insira um número par entre 4 e 14!");
  }
  if (Number(numberOfCards) === 4){
    document.getElementById("card0").style.display = "none";
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "none";
    document.getElementById("card8").style.display = "none";
    document.getElementById("card9").style.display = "none";
} else if(Number(numberOfCards) === 6){
    document.getElementById("card0").style.display = "none";
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "none";
} else if (Number(numberOfCards) === 8) {
    document.getElementById("card0").style.display = "none";
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
} else if (Number(numberOfCards) === 10){
    document.getElementById("card0").style.display = "none";
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
} else if (Number(numberOfCards) === 12){
    document.getElementById("card0").style.display = "none";
    document.getElementById("card1").style.display = "none";
} 


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

//Desvirando as cartas diferentes
function disableCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

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

  //Embaralhando as cartas
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

