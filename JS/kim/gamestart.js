const $start = document.getElementById('gameStart');
const $title = document.querySelector('.title');

$start.onmouseover = () => {
    $start.style.background = '#bbb'; 
    $title.style.textShadow = '25px 20px 20px greenyellow';
    }
$start.onmouseout = () => {
    $start.style.background = 'white';
    $title.style.textShadow = 'none';
}

