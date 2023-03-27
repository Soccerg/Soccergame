const $start = document.getElementById('gameStart');
const $title = document.querySelector('.title');
const $ball = document.getElementById('ball');

$start.onmouseover = () => {
    $start.style.background = '#bbb'; 
    $title.style.textShadow = '25px 20px 20px greenyellow';
    $title.classList.toggle('rotate');
    $ball.classList.toggle('move');
    }
$start.onmouseout = () => {
    $start.style.background = 'white';
    $title.style.textShadow = 'none';
    $title.classList.toggle('rotate');
    $ball.classList.toggle('move');
}

