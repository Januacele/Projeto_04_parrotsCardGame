5(function startGame(){

    startGame();

    function startGame(){
        for(let i=0; i<14; i++){
            const card = document.getElementById("card"+i);
            card.style.left = i % 7 === 0 ? 5 + "px" : i % 7 * 144 + 5 + "px";
            card.style.top = i < 7 ? 5 + "px" : 180 + "px"
        }


    }



}())

