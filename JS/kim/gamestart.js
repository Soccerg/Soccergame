const $start = document.getElementById('gameStart');
const $title = document.querySelector('.title');
const $ball = document.getElementById('ball');
const $dog = document.getElementById('dog');

document.onkeydown = e => {
    if (e.key === 'Enter') {
        // console.log('엔터감지');
        $start.click();
    }
};

$start.onmouseover = () => {
    $start.style.textShadow = '25px 20px 20px greenyellow'; 
    $title.style.textShadow = '25px 20px 20px greenyellow';
    $title.classList.toggle('rotate');
    $ball.classList.toggle('move');
    $ball.style.display = 'block';
   
    }
$start.onmouseout = () => {
    $start.style.background = 'none';
    $start.style.textShadow = 'none'; 
    $title.style.textShadow = 'none';
    $title.classList.toggle('rotate');
    $ball.classList.toggle('move');
    $ball.style.display = 'none';
}


