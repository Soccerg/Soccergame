    // ========================================================================== 호출부(함수)

    function firstPlayerShootingChangeImg() { // Player가 도움닫기 중, 드록바
        const $player = document.getElementById('Player'); // Player
        $player.style.backgroundImage = 'url(../../CSS/won/pic/God-Start-Shooting.png)';
    }

    function secondPlayerShootingChangeImg() { // Player가 도움닫기 중, 손흥민
        const $player = document.getElementById('Player'); // Player
        $player.style.backgroundImage = 'url(../../CSS/won/pic/Son-Start-Shooting.png)';
    }

    function playerSuccessShooting() {
        const $player = document.getElementById('Player'); // Player
        const $keep = document.getElementById('goalkeeper');
        
        $player.style.animation = 'SuccessShooting 0.05s infinite alternate';
        
        $keep.style.backgroundImage = 'url(../../CSS/lee/pic/De-hea-lose.png)';
        $keep.style.transitionProperty = 'background-image, translate'; // 움직이는 대상
        $keep.style.transitionDuration = '0.01s, 1s'; // 움직이는 대상의 속도
        
        
        ballReset();
    }
    function firstTeamSupporters () {
        const $supporters1 = document.getElementById('Supporters1');
        const $supporters2 = document.getElementById('Supporters2');
        
        playerSuccessShooting();
        
        $supporters2.classList.add('success-shoot');
        $supporters1.classList.remove('success-shoot');
        
    }
    function secondTeamSupporters () {
        const $supporters1 = document.getElementById('Supporters1');
        const $supporters2 = document.getElementById('Supporters2');
        
        playerSuccessShooting();
        $supporters1.classList.add('success-shoot');
        $supporters2.classList.remove('success-shoot');
        
    }
    
    function firstPlayerSuccessShooting() { // 드록바
        const $player = document.getElementById('Player'); // Player
        const $supporters1 = document.getElementById('Supporters1');
        const $supporters2 = document.getElementById('Supporters2');
        
        playerSuccessShooting();
        $player.style.backgroundImage = 'url(../../CSS/won/pic/God-Success-Shooting.png)';
        $supporters1.classList.add('success-shoot');
        $supporters2.classList.remove('success-shoot');

    }

    function secondPlayerSuccessShooting() { // 손흥민
        const $player = document.getElementById('Player'); // Player
        const $supporters1 = document.getElementById('Supporters1');
        const $supporters2 = document.getElementById('Supporters2');

        playerSuccessShooting();
        $player.style.backgroundImage = 'url(../../CSS/won/pic/Son-Goal.png)';
        $supporters2.classList.add('success-shoot');
        $supporters1.classList.remove('success-shoot');

    }

    function playerFailShooting() { // Player가 슈팅 실패 시
        const $player = document.getElementById('Player'); // Player
        const $keep = document.getElementById('goalkeeper');

        $player.style.animation = 'none'; // animation 효과 없애기

        $keep.style.backgroundImage = 'url(../../CSS/lee/pic/De-hea-win.png)';
        $keep.style.backgroundRepeat = null;
        $keep.style.transitionProperty = 'background-image, translate'; // 움직이는 대상
        $keep.style.transitionDuration = '0.01s, 1s'; // 움직이는 대상의 속도
        $keep.style.animation = 'SuccessShooting 0.05s infinite alternate';
    }

    function firstPlayerFailShooting() { // Player가 슈팅 실패 시
        const $player = document.getElementById('Player'); // Player
        const $supporters1 = document.getElementById('Supporters1');
        const $supporters2 = document.getElementById('Supporters2');


        playerFailShooting();

        $player.style.backgroundImage = 'url(../../CSS/won/pic/Son-fail.png)';
        $supporters1.classList.add('success-shoot');
        $supporters2.classList.remove('success-shoot');
    }
    
    function secondPlayerFailShooting() { // Player가 슈팅 실패 시
        const $player = document.getElementById('Player'); // Player
        const $supporters1 = document.getElementById('Supporters1');
        const $supporters2 = document.getElementById('Supporters2');
        
        
        playerFailShooting();
        $player.style.backgroundImage = 'url(../../CSS/won/pic/God-fail.png)';
        $supporters2.classList.add('success-shoot');
        $supporters1.classList.remove('success-shoot');
        
    }



    function afterShooting() { // 슈팅을 찬 이후에
        const $player = document.getElementById('Player'); // Player

        // Player
        $player.style.animation = 'playerJumping 0.5s infinite alternate'; // 애니메이션 재시작
        $player.style.scale = null; // 줄어든 크기 다시 복구

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
    // 공 들어갔을때
    // ◀
    function goalshootingLeft() { // 1(왼쪽) 입력 시 공 동작되는 함수

        const $ball = document.getElementById('Ball'); // 공

        $ball.style.animation = 'ShootingLeft 0.4s';

    }
    // ▲
    function goalshootingCenter() { // 2(중앙) 입력 시 동작되는 함수
        const $ball = document.getElementById('Ball'); // 공


        $ball.style.animation = 'ShootingCenter 0.4s';

    }
    // ▶

    function goalshootingRight() { // 3(오른쪽) 입력 시 동작되는 함수
        const $ball = document.getElementById('Ball'); // 공

        $ball.style.animation = 'ShootingRight 0.4s';

    }



    // 공 막혔을때 
    // ◀
    function shootingLeft() { // 1(왼쪽) 입력 시 공 동작되는 함수

        const $ball = document.getElementById('Ball'); // 공

        $ball.style.animation = 'blockShootingLeft 0.8s';

    }
    // ▲
    function shootingCenter() { // 2(중앙) 입력 시 동작되는 함수
        const $ball = document.getElementById('Ball'); // 공


        $ball.style.animation = 'blockShootingCenter 0.8s';

    }
    // ▶

    function shootingRight() { // 3(오른쪽) 입력 시 동작되는 함수
        const $ball = document.getElementById('Ball'); // 공

        $ball.style.animation = 'blockShootingRight 0.8s';

    }

    // Player의 움직임
    function playerStartShooting() {
        const $player = document.getElementById('Player'); // Player

        $player.style.animation = 'none'; // animation 효과 없애기
        $player.style.translate = '330px -140px'; // 움직이는 방향

        $player.style.transitionProperty = 'background-image, translate'; // 움직이는 대상
        $player.style.transitionDuration = '0.01s, 1s'; // 움직이는 대상의 속도
        $player.style.scale = '0.8 0.8'; // 움직일 때 크기 변화
        $player.style.transitionTimingFunction = 'cubic-bezier(1, 0.75, 0.5, 0)'; // 움직일 때 시작과 끝의 효과
    }

    function reset() { // 슈팅 후 위치 초기화 함수
        const $player = document.getElementById('Player'); // Player
        const $showbox = document.getElementById('ShowBox');
        const $keep = document.getElementById('goalkeeper');
        const $supporters1 = document.getElementById('Supporters1');
        const $supporters2 = document.getElementById('Supporters2');

        // Player
        $player.style.transition = null; // 원위치로 빠르게 복귀
        $player.style.translate = '0 0'; // 위치 초기화 (원위치로)
        $player.style.rotate = null;
        $player.style.animation = 'playerJumping 0.5s infinite alternate'; // 애니메이션 재시작
        $player.style.scale = null; // 줄어든 크기 다시 복구

        $keep.classList.remove('b1', 'b2', 'b3');

        $showbox.style.display = 'none';

        $supporters1.classList.remove('success-shoot');
        $supporters2.classList.remove('success-shoot');




    }

    function ballReset() {
        const $ball = document.getElementById('Ball'); // 공

        // 공
        $ball.style.transition = null; // 원위치로 빠르게 복귀
        $ball.style.translate = '0 0'; // 위치 초기화 (원위치로)
        $ball.style.rotate = null; // 기울기 초기화
        $ball.style.scale = null; // 줄어든 크기 다시 복구
    }

    function goalkeeperReset() {
        const $keep = document.getElementById('goalkeeper');

        // 골키퍼
        $keep.style.translate = '0 0';
        $keep.style.transition = null;
        $keep.style.backgroundImage = "url('../../CSS/lee/pic/De-hea-normal.png')";
        $keep.style.animation = null;
    }

    function shooting() { // 함수가 호출됬을 때
        playerStartShooting();
    }



    // =================================================================== 골키퍼

    function goalKeeperDelay() {}

    function saveLeft() {
        const $keep = document.getElementById('goalkeeper');

        $keep.classList.add('b1');
    }

    function saveCenter() {
        const $keep = document.getElementById('goalkeeper');
        $keep.style.animationName = 'upDown';
        $keep.style.animationDelay = '0.3s';

        $keep.classList.add('b2');
    }

    function saveRight() {
        const $keep = document.getElementById('goalkeeper');

        $keep.classList.add('b3');
    }

    function showBoxImage() {
        const $showbox = document.getElementById('ShowBox');

        $showbox.style.display = 'block';

    }

    function firstPlayer() {
        const $player = document.getElementById('Player'); // Player

        $player.style.backgroundImage = 'url(../../CSS/WON/pic/Son-normal.png)';
        secondPlayerShootingChangeImg();
        setTimeout(changeSon, 3000);
    }

    function secondPlayer() {
        const $player = document.getElementById('Player'); // Player

        $player.style.backgroundImage = 'url(../../CSS/WON/pic/God-normal.png)';
        firstPlayerShootingChangeImg();
        setTimeout(changeGod, 3000);

    }

    function changeGod() {
        const $player = document.getElementById('Player'); // Player


        $player.style.backgroundImage = 'url(../../CSS/WON/pic/Son-normal.png)';
    }

    function changeSon() {
        const $player = document.getElementById('Player'); // Player

        $player.style.backgroundImage = 'url(../../CSS/WON/pic/God-normal.png)';

    }

    // =================================================================== 호출부(이벤트)
    // 마우스로 방향버튼 클릭 시
    const $directionBtn = [...document.querySelectorAll('.selectDirection')]; // 방향키 버튼
    const $chance = document.getElementById('t1chance').children;
    const $chancenum = [...$chance];
    const $chance2 = document.getElementById('t2chance').children;
    const $chancenum2 = [...$chance2];
    let player = 0;
    let i = 0;
    let i2 = 0;
    let score = 0;
    let score123 = 0;
    const $team1score = document.getElementById('team1score');
    const $team2score = document.getElementById('team2score');

    const $ball = document.getElementById('Ball'); // 공

    $directionBtn.forEach($btn => $btn.onclick = e => {

        const $save = Math.floor(Math.random() * 3) + 1;


        shooting();

        function succes1() {
            $chancenum[i].style.color = 'red'
            $chancenum[i].textContent = 'O';
            $team1score.textContent = score;
            i++;
        }

        function fail1() {
            $chancenum[i].style.color = 'blue'
            $chancenum[i].textContent = 'X';
            i++;
        }

        function succes2() {
            $chancenum2[i2].style.color = 'red'
            $chancenum2[i2].textContent = 'O';
            $team2score.textContent = score;
            i2++;
        }

        function fail2() {
            $chancenum2[i2].style.color = 'blue'
            $chancenum2[i2].textContent = 'X';
            i2++;
        }

        console.log(`공찬버튼숫자 ${$btn.dataset.direction}`);

        if ($btn.id === 'Left') {
            // 슈팅 막혔을때
            if ($save === +$btn.dataset.direction) {
                console.log(+$btn.dataset.direction);
                setTimeout(shootingLeft, 1000);

                // 슈팅 들어갔을때
            } else if ($save !== +$btn.dataset.direction) {
                $ball.style.translate = '-250px, -370px'; // 움직이는 방향
                setTimeout(showBoxImage, 1500);
                setTimeout(goalshootingLeft, 1000);
            }

            // shootingLeft();
        } else if ($btn.id === 'Center') {
            // 슈팅 막혔을때
            if ($save === +$btn.dataset.direction) {
                console.log(+$btn.dataset.direction);
                setTimeout(shootingCenter, 1000);

                // 슈팅 들어갔을때
            } else if ($save !== +$btn.dataset.direction) {
                $ball.style.translate = '0, -400px'; // 움직이는 방향
                // shootingAnimation();
                // shootingCenter();
                setTimeout(showBoxImage, 1500);
                setTimeout(goalshootingCenter, 1000);
            }


            // shootingCenter();
        } else if ($btn.id === 'Right') {
            // 슈팅 막혔을때
            if ($save === +$btn.dataset.direction) {
                // console.log(+$btn.dataset.direction);
                setTimeout(shootingRight, 1000);

                // 슈팅 들어갔을때
            } else if ($save !== +$btn.dataset.direction) {
                $ball.style.translate = '250px, -370px'; // 움직이는 방향
                setTimeout(showBoxImage, 1500);
                setTimeout(goalshootingRight, 1000);
            }

            // shootingRight();
        } else {
            alert('???');
        }


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

        player++
        if (player === 11) {
            alert(`게임종료`);
            return;
        }

        if (player % 2 === 1) {
            secondPlayer();
            if ($save === +$btn.dataset.direction) {
                setTimeout(secondPlayerFailShooting, 1500);
                setTimeout(fail1, 1500);
                
            } else {
                setTimeout(firstPlayerSuccessShooting, 1500);
                setTimeout(succes1, 1500);
                setTimeout(showBoxImage, 1500);
                score++;
                
            }
        } else if (player % 2 === 0) {
            firstPlayer();
            if ($save === +$btn.dataset.direction) {
                setTimeout(firstPlayerFailShooting, 1500);
                setTimeout(fail2, 1500);

            } else {
                setTimeout(secondPlayerSuccessShooting, 1500);
                setTimeout(succes2, 1500);
                setTimeout(showBoxImage, 1500);
                score123++;

            }

        } else {
            alert(`게임종료`);
        }



        setTimeout(goalkeeperReset, 3000);
        setTimeout(reset, 3000);
    });
    // =================================================================== 호출부(이벤트)