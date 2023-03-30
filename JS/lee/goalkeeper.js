// const $keep = document.getElementById('goalkeeper');
// const $direction = document.getElementById('direction');
// const $t1chance = [...document.querySelectorAll('#t1chance>li')];
// const $t2chance = [...document.querySelectorAll('#tchance>li')];

// const $team1score = document.getElementById('team1score');

// const $button = document.getElementById('button');
// const $reset = document.getElementById('resetbutton')
// const $left = document.querySelector('.b1');
// const $center = document.querySelector('.b2');
// const $right = document.querySelector('.b3');



//클릭시
// let c = 0;
// let $count = 0;
// let score = 0;
// $button.onclick = () => {



// 랜덤 움직임

// const $save = Math.floor(Math.random() * (3)) + 1;

// if ($save === 1) {
//     if ($keep.classList.contains('b2')) {
//         $keep.classList.remove('b2');
//         $keep.classList.add('b1');

//     } else if ($keep.classList.contains('b3')) {
//         $keep.classList.remove('b3');
//         $keep.classList.add('b1');

//     } else {
//         $keep.classList.add('b1');
//     }
// } else if ($save === 2) {
//     if ($keep.classList.contains('b1')) {
//         $keep.classList.remove('b1');
//         $keep.classList.add('b2');

//     } else if ($keep.classList.contains('b3')) {
//         $keep.classList.remove('b3');
//         $keep.classList.add('b2');

//     } else {
//         $keep.classList.add('b2');
//     }
// } else {
//     if ($keep.classList.contains('b1')) {
//         $keep.classList.remove('b1');
//         $keep.classList.add('b3');

//     } else if ($keep.classList.contains('b2')) {
//         $keep.classList.remove('b2');
//         $keep.classList.add('b3');

//     } else {
//         $keep.classList.add('b3');

//     }
// }





// 득점판
// if ($shooting !== $save) {
//     $t1chance[c].style.background = 'red';



//     $team1score.textContent = score + 1;
//     score++;

// }

// c++;


// if (c === 5) {
//     $t1chance.forEach($li => {


//         $li.style.background = null;
//         c = 0;
//         score = 0;
//         $team1score.textContent = score;
//         $keep.classList.remove('b1')
//         $keep.classList.remove('b2')
//         $keep.classList.remove('b3')
//     })
// }
