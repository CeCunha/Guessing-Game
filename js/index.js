var random = Math.floor(Math.random() * 20) +1;
      
      // STEP 1b: Create variables to represent the three paragraphs above that will contain user feedback
      var prevGuesses = document.querySelector('#guesses');
      var result = document.querySelector('#lastResult');
      var hint = document.querySelector('#lowOrHi');
      var labelGuesses = document.querySelector('#label-guesses');
      var balloon = document.querySelector('#balloon');
      var reset = document.querySelector('#reset');
      var cesar = document.querySelector('#cesar');

      // STEP 1c: Create variables to represent the guessing form

      var userInput = document.querySelector('#guessField');
      var button = document.querySelector('button');
      
      // STEP 1d: Create variables to initialize counter for number of guesses

      var guesses = 0;
      
      // STEP 1e: Create a variable to represent the game reset button

      

      // STEP 2: Put focus on the field that allows user to type in guesses
      userInput.focus();

      // STEP 3: Build a function to check the user's guess
      function check(){

        
      

     
      
        // STEP 3a: Create a variable to contain what number the user entered
      var guess = userInput.value;
      console.log(guess);  
        guesses++;
        // STEP 3b: If this is the first guess, add some text to the screen as a label for listing previous guesses for reference
        if(guesses === 0){
          prevGuesses.textContent = 'Previous Guesses: ';
          
        }

        if(guesses >0){
          labelGuesses.textContent = 'Previous Guesses: ';
          cesar.style.display = 'inline';
        }



        
          var image1 = document.getElementById("img1");
          var image2 = document.getElementById("img2");
          var image3 = document.getElementById("img3");
          var image4 = document.getElementById("img4");
          if (guesses === 1) {
            image1.style.display = 'none';
            image2.style.display = 'inline';
        } else if (guesses === 2) {
          image2.style.display = 'none';
          image3.style.display = 'inline';
        } else if (guesses === 3) {
          image3.style.display = 'none';
          image4.style.display = 'inline'
        } else {}
    
      
      
      

     

        
        
        
        // STEP 3c: Add the user's current guess to that list, plus a space
        prevGuesses.textContent += guess + '   ';
        
        // STEP 3d: Conditional - the user guessed correctly
        
          // Output a success message, then end the game

        if(random == guess){
          image1.style.display = 'none';
          image2.style.display = 'none';
          image3.style.display = 'none';
          image4.style.display = 'none';
          result.textContent = "You Got It";
          result.style = "color:green;";
          alert('You did it. The boy is safe now!')
          
          
        }
          
          
          
          
        // STEP 3e: Conditional - the user is all out of guesses
        
          // Output an appropriate message, then end the game

        if(guesses >= 3){
          
          //userInput.disable = true;
          //button.disable = true;
          guessField.disabled = true;
          //document.getElementById("guessField").disabled = true;
          button.disabled = true;
          alert('OUCH !!!! GAME OVER')
          button.style.display = 'none';
          reset.style.display = 'inline';

        }
          
          
        // STEP 3f: Conditional - the user's guess is incorrect
        
          // Output an appropriate message

        if(random != guess){
          result.textContent = "Wrong Answer";
          
        }
          
          
          // If the guess is too low, let the user know

        if(guess < random){
          hint.textContent = "HOT HINT: Your last guess was LOW";
          
        }
          
          
          // Else if the guess is too high, let the user know

          if(guess > random){
          hint.textContent = "HOT HINT: Your last guess was HIGH";
          
        }
          
          
        
        // STEP 3g: Increment the guess count, move focus to the guess field for the next guess, and clear out the old input
        
        //guesses++;
        
        // STEP 3h: Proceed to the bottom of this file, just before we close out the SCRIPT element
        
      
      }
      // STEP 4: Build a function to end the game
      
        // STEP 4a: Disable the guessing field and submit button
        
        
        // STEP 4b: Build a new button to start a new game
        
        
        
        // STEP 4c: Add a click event to the new button that calls resetGame function
        
      

      // STEP 5: Build a function to start a new game
      
        // STEP 5a: Restore the guessCount variable to 1
        
        // STEP 5b: Clear out all the old messages in the paragraphs below the guessing form - this will need a loop
        
        
        
        
        // STEP 5c: Remove the reset button
        
        // STEP 5d: Re-enable the guessing form, clear out any old input, then put focus on the field
        
        
        
        
        // STEP 5e: Change background color of lastResult paragraph back to white
        
        // STEP 5f: Generate a new random number
        
      
      // STEP 3i: Add an event listener for the guess form button that calls the checkGuess function
      button.addEventListener('click',check);