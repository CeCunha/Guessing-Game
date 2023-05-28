
      // VARIABLES
      var random = Math.floor(Math.random() * 10) +1;
      var prevGuesses = document.querySelector('#guesses'); //
      var result = document.querySelector('#lastResult');
      var hint = document.querySelector('#lowOrHi');
      var labelGuesses = document.querySelector('#label-guesses');
      var reset = document.querySelector('#reset');
      var feedback = document.querySelector('#feedback');
      var gameover = document.querySelector('#gameover');
      var background = document.querySelector('#background');
      var userInput = document.querySelector('#guessField');
      var button = document.querySelector('button');
      var guesses = 0;
      var boy = document.getElementById("boy");

      userInput.focus();

      // LOGICAL
    function check(){
      var guess = userInput.value;

      // IF USER GUESS WRONG
      if(random != guess){
        result.textContent = "Wrong Answer";
        result.style.backgroundColor = "red";
        result.style.color = "white";
        guessField.reset = true;
        guesses++;
      }

      // IF USER GUESS RIGHT
      if(random == guess){
        boy.style.display = 'none';
        background.src = "image/endgame.png"
        result.style.color = "white";
        guessField.disabled = true;
        button.style.display = 'none';
        reset.style.display = 'inline';
        feedback.style.display = 'none';
        gameover.style.display = 'block';
        gameover.textContent = "YOU DID IT ! CONGRATULATIONS !";
        gameover.style.color = "green";
      }

        // COUNT USER GUESSES 
        if(guesses === 0){
          prevGuesses.textContent = 'Previous Guesses: ';
      }
        if(guesses >0){
          labelGuesses.textContent = 'Previous Guesses: ';
      }

        // PERFORMANCE X GUESS COUNTER
        if (guesses === 1) {
          boy.src = "image/step2.png";
      } else if (guesses === 2) {
        boy.src = "image/step3.png";
      } else if (guesses === 3) {
        boy.src = "image/step4.png";
        guessField.disabled = true;
        button.style.display = 'none';
        reset.style.display = 'inline';
        feedback.style.display = 'none';
        gameover.style.display = 'block';
        gameover.textContent = "OUCH !!! GAME OVER"
      } else {}
      prevGuesses.textContent += guess + '   ';

        // DISPLAY HINT
        if(guess < random){
          hint.textContent = "HOT HINT: Your last guess was LOW";
          hint.style.color = "#ffbb00";
          hint.style.backgroundColor = "#3D000F";
      }
        if(guess > random){
          hint.textContent = "HOT HINT: Your last guess was HIGH";
          hint.style.color = "#ffbb00";
          hint.style.backgroundColor = "#3D000F";
      }

    }
      button.addEventListener('click',check);