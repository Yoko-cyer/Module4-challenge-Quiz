// let response = confirm("Do you want to play Kpop Idole Quize?");

// if(response) {
//   alert("Let's Play!!");
// } else {
//   alert("See you later.");
// }

// when user clicks start btn, 
// show timer and question and hide start btn 
const startBtn = document.getElementById("start-button");
const secTimer = document.getElementById("section-timer");
const secQuestion = document.getElementById("question-section");
const timerEl = document.getElementById("timer") 
const secEndGame = document.getElementById("section-end-game");

let timeRemaining = 5;
let timerId;

// when start btn is clicked
startBtn.addEventListener('click', function(event){
  // start timer
  timerEl.textContent = timeRemaining;
  startTimer();
  // show question
  secQuestion.classList.remove("hide");
  // hide landing
});

function endGame() {

  // end game (show the game end screen)
  secEndGame.classList.remove("hide");

  // hide question section 
  secQuestion.classList.add("hide");
  // hide timer
  secTimer.classList.add("hide");
  
  // stop the timer
  clearInterval(timerId);

};

function startTimer() {
  
  // timer
  // once the game starts 
  // show the timer
  secTimer.classList.remove("hide");
  timerId = setInterval(function(){
  // subtract 1 from the current timer count
  timeRemaining = timeRemaining - 1;
  // and update the DOM for every passing sec
  timerEl.textContent = timeRemaining;

  // if timer expires while the game is not completed yet
  if(timeRemaining <= 0){

      // end game
      endGame();
  
  } 

  }, 1000)
};

// question section 

// user clicks on choice

// if user answer correct, "Correct" appers and get 10 points
// move on to the next question

// if user answer incorrect, "Wrong" appers and get nothing
// move on to the next question

// when all the questions are answered, user input initials and hit save btn

// after save button clickes, screen shows top 3 initials and scores 

// when "home" button is clicked, go back to the initial screen 

// if user click on the choice of the final question

// end game

// user type in initials in the input box

// user hit enter key
// get the user initials & highscore
// save

// if user didnt type anything in the input box
// do not save, show an error message in the dom
// save

//  user click on the save btn
// get the user initials & highscore
// save

// highscore page
// generate the high score list

// if user clicked on the back to home btn
// go back to the landing page