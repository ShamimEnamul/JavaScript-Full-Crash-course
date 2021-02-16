
var scores, roundScore, dice, activePlayer, isGamePlaying, lastDice;
//game initialization
init();

document.querySelector('.btn--roll').addEventListener('click', function(){
    if(isGamePlaying){
        dice = Math.floor(Math.random()* 6 + 1);
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+dice+'.png';
        
        //update the round score if the value is not 1
        if(dice !== 1 && lastDice !== dice){
            roundScore += dice;
            document.querySelector('#current--'+activePlayer).textContent = roundScore;
            
        }else{
            if(lastDice === dice){
                document.getElementById('score--'+activePlayer).textContent = 0;
            }
            nextPlayer();
        }
        lastDice = dice;
    }
  

});

document.querySelector('.btn--hold').addEventListener('click', function(){
   if(isGamePlaying){
     //store value in global variable 
     scores[activePlayer] += roundScore;

     document.getElementById('score--'+activePlayer).textContent =  scores[activePlayer];
     //check if player won the game
     if(scores[activePlayer] >= 20){ 
         //active player won the game
         winner();
     }else{
         nextPlayer();
     }
   }
   

});

//new game
document.querySelector('.btn--new').addEventListener('click', init);

function nextPlayer(){
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    roundScore = 0;
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';

    //remove current active player and active other one
   // document.querySelector('.player--0').classList.remove = 'player--active';
    //document.querySelector('.player--1').classList.add = 'player--active';
    document.querySelector('.player--0').classList.toggle = 'player--active';
    document.querySelector('.player--1').classList.toggle = 'player--active';

}

function winner(){
     //active player won the game
    /*  document.getElementById('score--0').textContent = '0';
     document.getElementById('score--1').textContent = '0'; */
     document.getElementById('current--0').textContent = '0';
     document.getElementById('current--1').textContent = '0';
     document.querySelector('#name--'+activePlayer).textContent = 'Winner!';
     document.querySelector('.dice').style.display = 'none';
     document.querySelector('.player--0').classList.remove = 'player--active';
     document.querySelector('.player--1').classList.remove = 'player--active';
     isGamePlaying = false;
}
function init(){

scores = [0, 0];
activePlayer = 0;
roundScore = 0;
lastDice = 0;
//dice = Math.floor(Math.random()* 6 + 1);
isGamePlaying = true;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'Player 1';
document.getElementById('name--1').textContent = 'Player 2';
}



//document.querySelector('#current--'+activePlayer).textContent = dice;
//document.querySelector('#current--'+activePlayer).innerHTML='<h1>'+4+'</h1>';

//var x = document.querySelector('#score--'+activePlayer).textContent;
//console.log(x);