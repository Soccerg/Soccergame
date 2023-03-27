// ============================================================================================= 선언부
const $ball = document.getElementById('Ball'); // 공
const $textBox = document.getElementById('Text'); // 텍스트 박스
const $shootingBtn = document.getElementById('Shooting'); // 슈팅 버튼
const $player = document.getElementById('Player'); // Player
const $directionBtn = [...document.querySelectorAll('.selectDirection')]; // 방향키 버튼
let $textNum = +$textBox.value; // +붙여서 정수값으로 변환 (안붙이면 문자열로 인식함)

// ============================================================================================= 호출부
// ============================================================================================= 호출부(함수)
function afterShooting(){ // 슈팅을 찬 이후에
    const $ball = document.getElementById('Ball'); // 공
    const $player = document.getElementById('Player'); // Player
    
    $player.style.animation = 'playerJumping 0.5s infinite alternate'; // 애니메이션 재시작
    $player.style.scale = null; // 줄어든 크기 다시 복구
    $ball.style.scale = null; // 줄어든 크기 다시 복구
    
}

function resetTextBox(){ // 슈팅 동작 후 text 박스 초기화
    $textBox.value = ''; // text박스안의 입력값 초기화
    $textBox.focus; // text박스
}

function shootingAnimation() { // 슈팅 작동 함수
    const $ball = document.getElementById('Ball'); // 공
    
    $ball.style.transition = '0.5s'; // 움직이는 속도
    $ball.style.scale = '0.8 0.8'; // 움직일 때 크기 변화
    $ball.style.rotate = '2000deg'; // 움직일 때 기울기(회전)
    $ball.style.transitionTimingFunction = 'cubic-bezier(0.25, 0.5, 0.25, 1)'; // 움직일 때 시작과 끝의 효과
    $ball.style.transitionDelay = '1s';
}

// ◀
function shootingLeft() { // 1(왼쪽) 입력 시 동작되는 함수
    const $ball = document.getElementById('Ball'); // 공
    
    $ball.style.translate = '-350px -350px'; // 움직이는 방향
    shootingAnimation();
}
// ▲
function shootingCenter() { // 2(중앙) 입력 시 동작되는 함수
    const $ball = document.getElementById('Ball'); // 공
    
    $ball.style.translate = '-15px -450px'; // 움직이는 방향
    shootingAnimation();
}
// ▶
function shootingRight() { // 3(오른쪽) 입력 시 동작되는 함수
    const $ball = document.getElementById('Ball'); // 공
    
    $ball.style.translate = '350px -350px'; // 움직이는 방향
    shootingAnimation();
}

// Player의 움직임
function playerStartShooting() { // 2
    const $player = document.getElementById('Player'); // Player
    
    $player.style.animation = 'none'; // animation 효과 없애기
    $player.style.translate = '450px -140px'; // 움직이는 방향
    $player.style.transition = '1s'; // 움직이는 속도
    $player.style.scale = '0.8 0.8'; // 움직일 때 크기 변화
    $player.style.transitionTimingFunction = 'cubic-bezier(1, 0.75, 0.5, 0)'; // 움직일 때 시작과 끝의 효과
}

function shootingDirection() {
    
    
    if ($textNum === 1) { // 1(왼쪽) 입력 시
        playerStartShooting();
        shootingLeft();
        
    } else if ($textNum === 2) { // 2(중앙) 입력 시
        playerStartShooting();
        shootingCenter();
        
    } else if ($textNum === 3) { // 3(오른쪽) 입력 시
        playerStartShooting();
        shootingRight();
        
    } else { // 1, 2, 3을 제외한 다른 값 입력 시
        alert('다시 입력하세요!! [ 1, 2, 3 ]'); // 경고메세지 출력
        resetTextBox();
    }
    
}

function reset(){ // 슈팅 후 위치 초기화 함수
    const $ball = document.getElementById('Ball'); // 공
    const $player = document.getElementById('Player'); // Player
    
    // Player
    $player.style.transition = null; // 움직이는 방향 
    $player.style.translate = '0 0'; // 움직이는 방향 
    
    // 공
    $ball.style.transition = null; // 움직이는 방향
    $ball.style.translate = '0 0'; // 움직이는 방향
    
    setTimeout(reStartAnimation, 1000);
    
}

function shooting() { // 함수가 호출됬을 때

    shootingDirection();

    setTimeout(reset, 2500);
    setTimeout(resetTextBox, 2500);
    setTimeout(afterShooting, 2500);
    
}


// 마우스로 버튼 모양 클릭 시
$shootingBtn.onclick = () => shooting();

// 마우스로 방향버튼 클릭 시
$directionBtn.forEach($btn => $btn.onclick = e =>{
    if($btn.id === 'Left') {
        shooting();
    } else if ($btn.id === 'Center') {
        shooting();
    } else if ($btn.id === 'Right') {
        shooting();
    } else {
        alert('다시 입력하세요!! [ 1, 2, 3 ]'); // 경고메세지 출력
        resetTextBox();
    }
})

// ============================================================================================= 호출부(이벤트)
// text 박스에서 Enter 입력 시
$textBox.onkeyup = e => {

    if (e.key === 'Enter') {
        shooting();
    } 

}











































































































// location.reload // 처음화면으로 돌아감