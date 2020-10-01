export function gamePlay() {

    const randomNumber = Math.ceil(Math.random() * 3);

    let rockPaperScissors;

    if (randomNumber === 1) {

        rockPaperScissors = 'rock';

    } if (randomNumber === 2){

        rockPaperScissors = 'paper';
    } if (randomNumber === 3) {

        rockPaperScissors = 'scissors';
    }
// console.log( rockPaperScissors);
    return rockPaperScissors;
}

export function didUserWin(userThrow, compThrow) {
// compare compThrow to userThrow and decide winner 
    if (userThrow === compThrow) {
        return 'draw';
    }
    if (userThrow === 'rock' && compThrow === 'paper') {
        return 'lose';
    }
    if (userThrow === 'rock' && compThrow === 'scissors') {
        return 'win';
    }
    if (userThrow === 'paper' && compThrow === 'rock') {
        return 'win';
    }
    if (userThrow === 'paper' && compThrow === 'scissors') {
        return 'lose';
    }
    if (userThrow === 'scissors' && compThrow === 'paper') {
        return 'win';
    }
    if (userThrow === 'scissors' && compThrow === 'rock') {
        return 'lose';
    }

}