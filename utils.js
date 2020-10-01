export function gamePlay()  {

    const randomNumber = Math.ceil(Math.random() * 3);

    let rockPaperScissors;

    if (randomNumber === 1) {

        rockPaperScissors = 'rock';

    } if (randomNumber === 2){

        rockPaperScissors = 'paper';
    } if (randomNumber === 3) {

        rockPaperScissors = 'scissors';
    }
console.log( rockPaperScissors)
    return rockPaperScissors;

}

