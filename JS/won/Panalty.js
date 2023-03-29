// ========================================================================== 호출부(함수)

function playerShootingChangeImg() { // Player가 도움닫기 중
    const $player = document.getElementById('Player'); // Player
    $player.style.backgroundImage = 'url(../../CSS/won/pic/God-Start-Shooting.png)';
}

function playerSuccessShooting() { // Player가 슈팅 성공 시
    const $player = document.getElementById('Player'); // Player
    const $supporters1 = document.getElementById('Supporters1');
    const $supporters2 = document.getElementById('Supporters2');

    $player.style.animation = 'SuccessShooting 0.05s infinite alternate';
    $player.style.backgroundImage = 'url(../../CSS/won/pic/God-Success-Shooting.png)';


    $supporters1.style.animation = 'SuccessShooting 0.05s infinite alternate';
    $supporters2.style.animation = 'SuccessShooting 0.05s infinite alternate';
}

function playerFailShooting() { // Player가 슈팅 실패 시
    const $player = document.getElementById('Player'); // Player
    $player.style.animation = null;
}


function afterShooting() { // 슈팅을 찬 이후에
    const $ball = document.getElementById('Ball'); // 공
    const $player = document.getElementById('Player'); // Player
    const $supporters1 = document.getElementById('Supporters1');
    const $supporters2 = document.getElementById('Supporters2');

    // Player
    $player.style.animation = 'playerJumping 0.5s infinite alternate'; // 애니메이션 재시작
    $player.style.scale = null; // 줄어든 크기 다시 복구

    // 공
    $ball.style.scale = null; // 줄어든 크기 다시 복구

    // 관중
    $supporters1.style.animation = 'Supporters 0.8s infinite alternate';
    $supporters2.style.animation = 'Supporters 0.8s infinite alternate';

}

function shootingAnimation() { // 슈팅 작동 함수
    const $ball = document.getElementById('Ball'); // 공
    
    // 공
    $ball.style.transition = '0.5s'; // 움직이는 속도
    $ball.style.scale = '0.8 0.8'; // 움직일 때 크기 변화
    $ball.style.rotate = '20000deg'; // 움직일 때 기울기(회전)
    $ball.style.transitionTimingFunction = 'cubic-bezier(0.25, 0.5, 0.25, 1)'; // 움직일 때 시작과 끝의 효과
    $ball.style.transitionDelay = '1s';
}

// ◀
function shootingLeft() { // 1(왼쪽) 입력 시 동작되는 함수
    const $ball = document.getElementById('Ball'); // 공
    
    $ball.style.translate = '-250px -370px'; // 움직이는 방향
    $ball.textContent = 1;
    
    shootingAnimation();
    
    return $ball.textContent;
}
// ▲
function shootingCenter() { // 2(중앙) 입력 시 동작되는 함수
    const $ball = document.getElementById('Ball'); // 공
    
    $ball.style.translate = '0 -400px'; // 움직이는 방향
    shootingAnimation();
}
// ▶
function shootingRight() { // 3(오른쪽) 입력 시 동작되는 함수
    const $ball = document.getElementById('Ball'); // 공
    
    $ball.style.translate = '250px -370px'; // 움직이는 방향
    shootingAnimation();
}

// Player의 움직임
function playerStartShooting() {
    const $player = document.getElementById('Player'); // Player
    
    $player.style.animation = 'none'; // animation 효과 없애기
    $player.style.translate = '330px -140px'; // 움직이는 방향

    


    $player.style.transition = '1s'; // 움직이는 속도

    $player.style.transitionProperty = 'background-image, translate'; // 움직이는 대상
    $player.style.transitionDuration = '0.01s, 1s'; // 움직이는 대상의 속도
    $player.style.scale = '0.8 0.8'; // 움직일 때 크기 변화
    $player.style.transitionTimingFunction = 'cubic-bezier(1, 0.75, 0.5, 0)'; // 움직일 때 시작과 끝의 효과
    $player.style.rotate = '7200deg';
}



function reset() { // 슈팅 후 위치 초기화 함수
    const $ball = document.getElementById('Ball'); // 공
    const $player = document.getElementById('Player'); // Player
    const $keep = document.getElementById('goalkeeper');
    
    // Player
    $player.style.transition = null; // 원위치로 빠르게 복귀
    $player.style.translate = '0 0'; // 위치 초기화 (원위치로)
    
    $player.style.rotate = null;
    $player.style.backgroundImage = "url('../../CSS/WON/pic/God.png')";




    $player.style.backgroundImage = "url('../../CSS/WON/pic/God.png')";



    // 공
    $ball.style.transition = null; // 원위치로 빠르게 복귀
    $ball.style.translate = '0 0'; // 위치 초기화 (원위치로)
    $ball.style.rotate = null; // 기울기 초기화

    
    // 골키퍼
    $keep.style.translate = '0 0';
    $keep.style.transition = null;



}

function shooting() { // 함수가 호출됬을 때
    playerShootingChangeImg();
    playerStartShooting();






}

function shooting() { // 함수가 호출됬을 때
    playerStartShooting();

    playerShootingChangeImg();
    



    setTimeout(reset, 2500);

    setTimeout(afterShooting, 2500);
    setTimeout(playerSuccessShooting, 1500);
}




// =================================================================== 골키퍼

function saveLeft() {
    const $keep = document.getElementById('goalkeeper');
    $keep.style.transition = '1s';
    
    $keep.classList.add('b1');
}

function saveCenter() {
    const $keep = document.getElementById('goalkeeper');
    $keep.style.transition = '1s';
    
    $keep.classList.add('b2');
    
}

function saveRight() {
    const $keep = document.getElementById('goalkeeper');
    $keep.style.transition = '1s';
    
    $keep.classList.add('b3');
}

function save() {
    const $keep = document.getElementById('goalkeeper');
    const $save = Math.floor(Math.random() * 3) + 1;
    
    
    console.log("키퍼가 막는 방향 : " + $save);
    
    if ($save === 1) {
        setTimeout(saveLeft, 1000);
    } else if ($save === 2) {
        setTimeout(saveCenter, 1000);
    } else if ($save === 3) {
        setTimeout(saveRight, 1000);
    } else {
        alert('???');
    }
    
    
    $keep.classList.remove('b1', 'b2', 'b3');
    
    console.log($save.textContent);

// 골키퍼
function save() {
    const $saveNum = Math.floor(Math.random() * 3) + 1;
    console.log($saveNum);
}

// ============================================================================================= 호출부(이벤트)
// 마우스로 방향버튼 클릭 시
const $directionBtn = [...document.querySelectorAll('.selectDirection')]; // 방향키 버튼

$directionBtn.forEach($btn => $btn.onclick = e => {
    shooting();

    setTimeout(save, 1000);

        if ($btn.id === 'Left') {
            shootingLeft();
            $directionBtn.textContent = 1;
        } else if ($btn.id === 'Center') {
            shootingCenter();
            $directionBtn.textContent = 2;
        } else {
            shootingRight();
            $directionBtn.textContent = 3;
        }
    });

    



};
// =================================================================== 골키퍼


// ========================================================================== 호출부(함수)






























































































// const $ball = document.getElementById('Ball'); // 공











// =================================================================== 호출부(이벤트)
// 마우스로 방향버튼 클릭 시
const $directionBtn = [...document.querySelectorAll('.selectDirection')]; // 방향키 버튼

$directionBtn.forEach($btn => $btn.onclick = e => {

    shooting();
    save();

    if ($btn.id === 'Left') {
        shootingLeft();

    } else if ($btn.id === 'Center') {
        shootingCenter();
    } else if ($btn.id === 'Right') {
        shootingRight();
    } else {
        alert('???');
    }

    setTimeout(reset, 2500);
});
// =================================================================== 호출부(이벤트)