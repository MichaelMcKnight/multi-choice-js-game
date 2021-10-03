jQuery(document).ready(($) => {

    // Create an array of objects to store the questions.
    const questions = [
        {
            question: 'Who thought it would be funny to put a urinal in an art show in 1917?',
            answers: {
                choice1: 'Leonardo Da Vinci',
                choice2: 'Marcel Duchamp',
                choice3: 'Édouard Manet',
                choice4: 'Pablo Picaso',
            },
            answer: 'choice2',
        },
        {
            question: 'Which of these people is not a member of the Beatles?',
            answers: {
                choice1: 'Bob Dylan',
                choice2: 'Paul McCartney',
                choice3: 'George Harrison',
                choice4: 'John Lennon',
            },
            answer: 'choice1',
        },
        {
            question: 'What is the name of the skateboard trick that consists of a pop shuvit combined with a kickflip?',
            answers: {
                choice1: 'Varial Heelflip',
                choice2: 'Tre Flip',
                choice3: 'Hardflip',
                choice4: 'Varial Kickflip',
            },
            answer: 'choice4',
        },
        {
            question: 'Who was the longest serving U.S. President?',
            answers: {
                choice1: 'George Washington',
                choice2: 'Woodrow Wilson',
                choice3: 'Franklin Roosevelt',
                choice4: 'Thomas Jefferson',
            },
            answer: 'choice3',
        },
        {
            question: 'What spirit is used to make an Old Fashioned?',
            answers: {
                choice1: 'Tequilla',
                choice2: 'Whiskey',
                choice3: 'Rum',
                choice4: 'Gin',
            },
            answer: 'choice2',
        },
    ];
    
    // Create variable for easy access to certain elements.

    const question = document.getElementById('question');
    const answers = document.getElementsByTagName('label');
    const answersWrap = document.getElementsByClassName('answer');

    // Use this to create a remove function. This removes the already seen questions from the array so that no questions show more than once. 
    
    Array.prototype.remove = function() {
        var what, a = arguments, L = a.length, ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };

    // Make sure all questions are loaded randomly.

    const question1 = questions[Math.floor(Math.random() * questions.length)];
    const question2 = questions.remove(question1)[Math.floor(Math.random() * questions.length)];
    const question3 = questions.remove(question2)[Math.floor(Math.random() * questions.length)];
    const question4 = questions.remove(question3)[Math.floor(Math.random() * questions.length)];
    const question5 = questions.remove(question4)[Math.floor(Math.random() * questions.length)];

    // Once the questions are generated in random order, store them in array for later.

    const questionArr = [
        question1,
        question2,
        question3,
        question4,
        question5
    ]
    
    // Begin the game by placing the question one variables in the correct elements. 

    question.innerText = question1.question;
    answers[0].innerText = question1.answers.choice1;
    answers[1].innerText = question1.answers.choice2;
    answers[2].innerText = question1.answers.choice3;
    answers[3].innerText = question1.answers.choice4;

    // Create a function for changing the questions based on the innerText fo the question variable.

    const changeQuestion = () => {
        if (question.innerText == question1.question) {
            question.innerText = question2.question;
            answers[0].innerText = question2.answers.choice1;
            answers[1].innerText = question2.answers.choice2;
            answers[2].innerText = question2.answers.choice3;
            answers[3].innerText = question2.answers.choice4;
        } else if (question.innerText == question2.question) {
            console.log(2);
            question.innerText = question3.question;
            answers[0].innerText = question3.answers.choice1;
            answers[1].innerText = question3.answers.choice2;
            answers[2].innerText = question3.answers.choice3;
            answers[3].innerText = question3.answers.choice4;
        } else if (question.innerText == question3.question) {
            console.log(3);
            question.innerText = question4.question;
            answers[0].innerText = question4.answers.choice1;
            answers[1].innerText = question4.answers.choice2;
            answers[2].innerText = question4.answers.choice3;
            answers[3].innerText = question4.answers.choice4;
        } else if (question.innerText == question4.question) {
            console.log(4);
            question.innerText = question5.question;
            answers[0].innerText = question5.answers.choice1;
            answers[1].innerText = question5.answers.choice2;
            answers[2].innerText = question5.answers.choice3;
            answers[3].innerText = question5.answers.choice4;
        } else {
            // Update game container with new markup and add button to restart.
            $('.game-container').html('<h3 style="text-align:center;">Game Completed.</h3><h3 style="text-align:center;">You scored</h3><h2 style="text-align:center;font-size:5rem;color:#fff;">'+score+' out of 5</h2><h3 style="text-align:center;">Congratulations! 🎉</h3><div style="text-align:center;"><button class="btn" id="restartGame">Play Again</button></div>').addClass('complete');
            $('#restartGame').click(() => {
                location.reload();
            });
        }
    }

    // Create a variable to keep track of the score.

    let score = 0;

    // Loop through all of the answers.

    for (let i = 0; i < answers.length; i++) {
        // Click iteration of answers for the following function to run.
        $(answers[i]).on('click', () => {
            // Create a variable for the selected answer.
            let currentAnswer = answersWrap[i].querySelector('input').value;
            // Create another loop to make sure the current question is equal to that of the question from the array we created earlier.
            for (let x = 0; x < questionArr.length; x++) {
                if (question.innerHTML == questionArr[x].question) {
                    // Determin whether or not the answer is correct.
                    if (currentAnswer == questionArr[x].answer) {
                        $('#correct-or-incorrect').html('<h3 class="d-flex" style="align-items:center;"><div class="circle right"><i class="fas fa-check center-el-abs"></i></div> Yes! You are correct.</h3>').addClass('slide-in');
                        // If correct, update the score.
                        score++;
                        // Add some fun aniomations as well. :)
                        $('.game-container').addClass('slide-out');
                        setTimeout(() => {
                            $('#score').text(score);
                            $('#correct-or-incorrect').removeClass('slide-in');
                            $('.game-container').removeClass('slide-out').addClass('slide-in');
                        }, 1000);
                        setTimeout(() => {
                            $('.game-container').removeClass('slide-in');
                        }, 1500);
                    } else {
                        $('#correct-or-incorrect').html('<h3 class="d-flex" style="align-items:center;"><div class="circle wrong"><i class="fas fa-times center-el-abs"></i></div> No! That is not correct.</h3>').addClass('slide-in');
                        $('.game-container').addClass('slide-out');
                        setTimeout(() => {
                            $('#correct-or-incorrect').removeClass('slide-in');
                            $('.game-container').removeClass('slide-out').addClass('slide-in');
                        }, 1000);
                        setTimeout(() => {
                            $('.game-container').removeClass('slide-in');
                        }, 1500);
                    }
                }
            }
            // Run changeQuestion function.
            setTimeout(() => {
                changeQuestion();
            }, 1000);
        });
    }

});