let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "blue"];

let started = false;
let level = 0;
let highestscore = 0;
let h2 = document.querySelector("h2");
let span = document.querySelector("span");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 400);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 400);
}

function levelup() {

    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);

    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randbtn);

}

function checkAns(idx) {
    //console.log("curr level" , level);

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);

        }
    } else {
        h2.innerHTML = `game over! Your score was <b>${level} </b> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        if (level > highestscore) {
            highestscore = level;
            span.innerText = `${highestscore}`;
        }
        reset();
    }
}

function btnPress() {
    let btn = this;
    console.log(this);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}










