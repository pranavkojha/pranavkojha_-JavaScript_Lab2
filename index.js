function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;

  this.getQuestionByIndex = function () {
      return this.questions[this.questionIndex]
  }

  this.loadQuestions = function () {

      if(this.questionIndex == this.questions.length) {
          this.showScores()
      } else {
          let questionElement = document.getElementById("question")
          questionElement.innerText = this.getQuestionByIndex().text
  
          let choices = this.getQuestionByIndex().choices;
          for(let i = 0; i < choices.length; i++) {
              let element = document.getElementById("btn" + i)
              element.innerText = choices[i]
              this.handleOptionBtn("btn"+i)
          }
          this.showProgress()
      }
      
  }
  this.showScores = function() {
      let h1 = document.querySelector("h1")
      h1.innerText = "Result"
      let quizDetails = document.querySelector(".quiz-details");
      quizDetails.innerHTML = `<h2> Your score is : ${this.score} and percentage is : ${(this.score/this.questions.length * 100)}</h2>`

  }
  this.showProgress = function() {
      let progresselem = document.getElementById("progress")
      progresselem.innerHTML = `Question ${this.questionIndex+1} of ${this.questions.length}`
  }


  this.checkOptionWithAnswer = function(answer) {
      if(this.getQuestionByIndex().answer == answer) {
          this.score++;
      }
  }

  this.handleOptionBtn = function (btnId) {
      let btn = document.getElementById(btnId)
      let self = this;
      
      btn.onclick = function() {
          
          self.checkOptionWithAnswer(btn.innerText)
          self.questionIndex++;
          self.loadQuestions();
      }
  }


}

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;


}

let questions = [
  new Question("What is the capital of Australia?", ["Sydney", "Melbourne", "Brisbane", "Canberra"], "Canberra"),
  new Question("Which is the largest ocean?", ["Indian", "Atlantic", "Pacific", "Arctic"], "Pacific"),
  new Question("Which country has the largest area?", ["Russia", "China", "USA", "India"], "Russia"),
  new Question("Which is the largest City in the world?", [ "Delhi", "Shanghai", "Tokyo","Dhaka"], "Tokyo"),
  new Question("Which is the largest animal on earth?", ["Elephant", "Whale", "Giraffe", "Hippo"], "Whale"),
]
let quiz = new Quiz(questions)

quiz.loadQuestions()