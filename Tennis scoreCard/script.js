const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const p1dis = document.querySelector('#p1dis');
const p2dis = document.querySelector('#p2dis');
const reset = document.querySelector('#reset');
const points = document.querySelector('#points');

let winscore=0;
points.addEventListener('change',()=>{
    winscore = parseInt(points.value);
    resetGame();
});

let p1score=0;
let p2score=0;
let gameOver = false;

p1btn.addEventListener('click',function(){
    if(!gameOver){
        p1score++;
        if(p1score===winscore){
            gameOver = true;
            p1dis.classList.add('winner');
            p2dis.classList.add('losser');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p1dis.textContent = p1score;

    }
});

p2btn.addEventListener('click',function(){
    if(!gameOver){
        p2score++;
        if(p2score===winscore){
            gameOver = true;
            p2dis.classList.add('winner');
            p1dis.classList.add('losser');
            p1btn.disabled = true;
            p2btn.disabled = true;
            
        }
        p2dis.textContent = p2score;

    }
});


reset.addEventListener('click',resetGame);

function resetGame(){
    p1score=0;
    p2score=0;
    gameOver = false;
    p1dis.textContent = p1score;
    p2dis.textContent = p2score;
    p1dis.classList.remove('winner','losser');
    p2dis.classList.remove('winner','losser');
    p1btn.disabled = false;
    p2btn.disabled = false;

}

