(function(){

    let images = [];

    for (let i = 0; i<14; i++){
        let img = {
            src: "./Images/"+ i + ".gif",
            id: i % 7
        };

        images.push(img);
    }
   
    startGame();

    //Distribuição das cartas e Flip

    function startGame(){

        images = randomSort(images);


        let frontFaces = document.getElementsByClassName("front");

        for(let i=0; i<14; i++){
            const card = document.querySelector("#card"+i);                       //encontra cada carta pelo Id concatenando com o número pré-definido pra cada uma;
            card.style.left = i % 7 === 0 ? 5 + "px" : i % 7 * 144 + 5 + "px";    // muda o css da carta colocando dando um left de 5px na carta de indice 0 e um distanciamento de 144px entre as cartas que terão indice diferente de zero;
            card.style.top = i < 7 ? 5 + "px" : 180 + "px";                       // muda o css das cartas com índice de 0 a 6 (menor que 7) aplicando um top de 180px;
            
            card.addEventListener("click", flipCard, false);                      // Adição do evento click ao ser aplicada a função flipCard;

            frontFaces[i].style.background = "url('" + images[i].src + "')";      //Adicionando as cartas do jogo pelo objeto Imagem fazendo interação pelo índice
            frontFaces[i].setAttribute("id", images[i].id);
            
        }
    }

    //Randomização das cartas

    function randomSort(oldArray){

        let newArray = [];
        while(newArray.length !== oldArray.length){
            let i = Math.floor(Math.random()*oldArray.length);

            if(newArray.indexOf(oldArray[i]) < 0){
                newArray.push(oldArray[i]);
           }
        }
        
        return newArray;
        
    }

    //Virar Cartas

    function flipCard(){
        let faces = this.getElementsByClassName("face");                          // Encontra as divs com a classe face. A face [0] retorna "back" e na posição [1] retorna front;
        faces[0].classList.toggle("flipped");  
        faces[1].classList.toggle("flipped");                          
       
    }



})

