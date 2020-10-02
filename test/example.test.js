// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin, gamePlay } from '../utils.js';

const test = QUnit.test;

test('this tests the didUserWin function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';
    const expected2 = 'win';
    const expected3 = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'paper');
    const actual2 = didUserWin('scissors', 'paper');
    const actual3 = didUserWin('rock', 'scissors');



    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);

});

test('this tests the gamePlay function', (expect) => {

        
        const actual = gamePlay();

        expect.equal(typeof actual, 'string');

});