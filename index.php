<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Michael's Javascript Game Bananza!</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="<?php echo get_theme_file_uri(); ?>/template-parts/js-game/style.css">
</head>
<body>

    <main role="main" class="js-game">
        <div class="container">
            <div class="score d-flex align-items-center">
                <h3>Score</h3>
                <div class="score-container">
                    <h2 class="score-number" id="score">0</h2>
                </div>
            </div>
            <div id="correct-or-incorrect"></div>
            <header>
                <h1>Multiple Choice JS Game</h1>
                <p>This was a personal Javascript project. I created this multiple choice game with a few goals in mind. I wanted it to load the questions in random order each time, confirm weather or not the choice is correct or incorrect when clicked, have a seamless animation between questions, and show the total of correct answers once finished.</p>
            </header>
            <section class="game-container">
                <h2 id="question"></h2>
                <div class="answers">
                    <div class="answer">
                        <input type="radio" name="answer" value="choice1" id="choice1">
                        <label for="choice1"></label>
                    </div>
                    <div class="answer">
                        <input type="radio" name="answer" value="choice2" id="choice2">
                        <label for="choice2"></label>
                    </div>
                    <div class="answer">
                        <input type="radio" name="answer" value="choice3" id="choice3">
                        <label for="choice3"></label>
                    </div>
                    <div class="answer">
                        <input type="radio" name="answer" value="choice4" id="choice4">
                        <label for="choice4"></label>
                    </div>
                </div>
            </section>
        </div>
    </main>
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"></script>
    <script src="<?php echo get_theme_file_uri(); ?>/template-parts/js-game/index.js"></script>
</body>
</html>
