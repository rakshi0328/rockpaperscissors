let userScore=0;
let computerScore=0;
const userScore_span=
document.getElementById('user-score');
const computerScore_span =
document.getElementById('computer-score');
const scoreBoard_div =
document.querySelector('.scoreboard');
const result_div =
document.querySelector('.result');
const rock_div =
document.getElementById('rock');
const paper_div =
document.getElementById('paper');
const scissors_div =
document.getElementById('scissors');
const game_reset=
document.getElementById('reset');
//computer use the math.random function and return the value
function getComputerChoice()
{
    const choices =['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
//coverting lower case to upper case
function convertCase(anythingIwant)
{
    if(anythingIwant=='paper')
        return 'Paper';
    if(anythingIwant=='scissors')
        return 'Scissors';
return 'Rock';
}
//winning condition when us0er clicks on a choice wher the value is passed
function win(user,computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    const userName =' (user) '.fontsize(3).sup();
    const compName ='(comp) '.fontsize(3).sup();
    result_div.innerHTML =
    `<p>${convertCase(user)}${userName} beats
    ${convertCase(computer)}${compName}. you win! </p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('winningStyles');
    setTimeout(() =>
    roundStatus.classList.remove('winningStyles'),300)
}
function loses(user,computer) {
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    const userName ='(user) '.fontsize(3).sup();
    const compName ='(comp) '.fontsize(3).sup();
    result_div.innerHTML =
    `<p>${convertCase(computer)}${compName} beats
     ${convertCase(user)}${userName}. you lose!</p>`;
    const roundStatus = document.getElementById(user)
    roundStatus.classList.add('losingStyles');
    setTimeout(() =>
        roundStatus.classList.remove('losingStyles'),300);
}
//draw condition
function draw(user, computer){
    const userName =' (user) '.fontsize(3).sup();
    const compName=' (comp) '.fontsize(3).sup();
    result_div .innerHTML =`<p>It was a draw! you both chose ${convertCase(user)}</p>`;
    const roundStatus = document.getElementById(user)
    roundStatus.classList.add('drawStyles');
    setTimeout(() =>
        roundStatus.classList.remove('drawStyles'),300);
}
//reset button
function resetScores()
{
    userScore=0;
    computerScore=0;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=`<p>Scores have been reset!</p>`;
}
//actual logic of the game
function game(userChoice) {
    const ComputerChoice =getComputerChoice();
    switch(userChoice + ComputerChoice) {
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
        win(userChoice , ComputerChoice)
        break;
        case 'rockpaper' :
        case 'scissorsrock' :
        case 'paperscissors' :
        loses(userChoice,ComputerChoice);
        break;
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper' :
        draw(userChoice, ComputerChoice);
        //console.log("draw");
        break;
    }
}
function main() {
    rock_div.addEventListener('click',() => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click',() => game('scissors'));
    game_reset.addEventListener('click',resetScores);
}
main();










