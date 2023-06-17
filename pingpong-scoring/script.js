const p1 = {
    score: 0,
    button: document.getElementById('p1Button'),
    display: document.getElementById('player-one')
}

const p2 = {
    score: 0,
    button: document.getElementById('p2Button'),
    display: document.getElementById('player-two')
}

let reset = document.getElementById('reset')
let winScore = document.getElementById('winScore')

let gameOver = false;
let winningScore = 5;

function updateScore(player, opponent){
    if(!gameOver){
        player.score+=1;
        if(player.score==winningScore){
            gameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.display.classList.add('win')
            opponent.display.classList.add('lost')
        }
        player.display.textContent = player.score;
    }
}

function resetScores(p1, p2){
    gameOver = false;
    for(let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = p.score;
        p.button.disabled = false;
        p.display.classList.remove('win', 'lost');
    }
}


winScore.addEventListener('change', function(){
    winningScore = winScore.value;
})

p1Button.addEventListener('click', function(){updateScore(p1,p2)})
p2Button.addEventListener('click', function(){updateScore(p2,p1)})

reset.addEventListener('click', function(){
    resetScores(p1, p2);
})


