const userScore = 0;
const compScore = 0;
const userSrore_span = document.getElementById("user-score");
const compSrore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function main() {
    rock_div.addEventListener('click', function () {
        game("rock");
    });

    paper_div.addEventListener('click', function () {
        game("paper");
    });

    scissors_div.addEventListener('click', function () {
        game("scissors");
    });
};

main();