// Setting HTML elements to variables

const gameContainer = document.querySelector('#questions')
const startButton = document.querySelector('#start-game')
const body = document.querySelector('#body')
const answerBox = document.querySelector('#answers')
const winOrLose = document.querySelector('#win-or-lose')
const finishButton = document.querySelector('#finish-game')
const main = document.querySelector('#main')
const header = document.querySelector('#header')
const rules = document.querySelector('#rules')
const countTitle = document.querySelector('#count-title')
const winCounter = document.querySelector('#counter')
let counter = 0
let questionData = []

// How to Play the game

rules.className = 'rules'
rules.textContent = 'Welcome! The objective of the game is to answer at least 7 questions correct. Failure to do so will not only result in a loss, but will prove that you are not smarter than a GA Penguin. Are you ready? Click the start button below!'

// Getting info from URL

async function getData() {
  try {
    let dataURL = await axios.get(`https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986`)
    const response = dataURL.data.results
    for (let i = 0; i < response.length; i++) {
      questionData.push(response[i].question)
    }
    questionData = response
    return response
  } catch (error) {
    console.error(error)
  }
}

// Start game button event listener

startButton.addEventListener('click', () => {
  addCount()
  showQuestions()
  getData()
  finishGame()
  body.removeChild(startButton)
  header.removeChild(rules)
})

// Adding counter to DOM

function addCount() {
  countTitle.textContent = 'Answers Correct: '
  countTitle.className = 'count-title'
  header.append(countTitle)
  header.append(winCounter)
}

// Adding Win or Lose game screen depending on amount of points

function finishGame() {
  finishButton.className = 'check-answers'
  finishButton.textContent = 'Finish Game'
  finishButton.addEventListener('click', () => {
    main.removeChild(finishButton)
    body.removeChild(gameContainer)
    body.removeChild(answerBox)
    if (counter >= 7) {
      let winScreen = document.createElement('div')
      winScreen.className = 'win-or-lose-screen'
      winScreen.textContent = 'You ARE smarter than a GA Penguin! Congratulations, you win!'
      winOrLose.append(winScreen)
      let playAgain = document.createElement('div')
      playAgain.className = 'play-again'
      playAgain.textContent = 'Want to play again? Click the button below!'
      winOrLose.append(playAgain)
      let newGame = document.createElement('button')
      newGame.className = 'new-game'
      newGame.textContent = 'New Game'
      winOrLose.append(newGame)
      newGame.addEventListener('click', () => {
        window.location.reload()
      })
    } else {
      let loseScreen = document.createElement('div')
      loseScreen.className = 'win-or-lose-screen'
      loseScreen.textContent = 'Sorry, you are NOT smarter than a GA Penguin. Go take a class at GA and come back to try again!'
      winOrLose.append(loseScreen)
      let alsoPlayAgain = document.createElement('div')
      alsoPlayAgain.className = 'play-again'
      alsoPlayAgain.textContent = 'Back from class already? Click the button below to see if you\'ve learned something!'
      winOrLose.append(alsoPlayAgain)
      let alsoNewGame = document.createElement('button')
      alsoNewGame.className = 'new-game'
      alsoNewGame.textContent = 'New Game'
      winOrLose.append(alsoNewGame)
      alsoNewGame.addEventListener('click', () => {
        // Found on https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click
        window.location.reload()
      })
    }
  })
}

// Adding questions, answers and event listeners

function showQuestions() {
  for (let i = 0; i < 10; i++) {
    let questionBlock = document.createElement('div')
    questionBlock.textContent = `Question ${i + 1}`
    questionBlock.className = `question-block question${i}`
    let questions = document.getElementsByClassName(`question${i}`)
    gameContainer.append(questionBlock)
    questionBlock.addEventListener('click', function handleClick(e) {
      let currentQuestion = document.createElement('div')
      currentQuestion.className = 'current-question'
      currentQuestion.textContent = decodeURIComponent(questionData[i].question)
      answerBox.append(currentQuestion)
      let answersArray = []
      let answerDivsArray = []
      answersArray.push(questionData[i].incorrect_answers.pop())
      answersArray.push(questionData[i].incorrect_answers.pop())
      answersArray.push(questionData[i].incorrect_answers.pop())
      answersArray.push(questionData[i].correct_answer)
      answersArray.forEach((answer, index) => {
        let answerDiv = document.createElement('div')
        answerDiv.textContent = decodeURIComponent(answer)
        // Found on https://stackoverflow.com/questions/3569329/javascript-to-make-the-page-jump-to-a-specific-location
        window.location = 'index.html#answers'
        answerDiv.className = `answers ${index === 3 ? 'correct' : 'incorrect'}`
        answerDiv.addEventListener('click', function clickAnswer(e) {
          answerDivsArray.forEach(element => {
            answerBox.removeChild(element)
          })
          if (answerDiv.classList.contains('correct')) {
            counter = counter + 1
            winCounter.innerHTML = counter
            let correctAnswer = document.createElement('div')
            correctAnswer.className = 'right right-or-wrong'
            correctAnswer.textContent = 'You got it Correct!'
            answerBox.append(correctAnswer)
            let nextQuestion = document.createElement('button')
            nextQuestion.className = 'next-question'
            nextQuestion.textContent = 'Next Question'
            answerBox.append(nextQuestion)
            nextQuestion.addEventListener('click', () => {
              questions[0].style.backgroundColor = 'limegreen'
              questions[0].style.color = 'white'
              answerBox.removeChild(currentQuestion)
              answerBox.removeChild(correctAnswer)
              answerBox.removeChild(nextQuestion)
            })
          } else {
            let wrongAnswer = document.createElement('div')
            wrongAnswer.className = 'wrong right-or-wrong'
            wrongAnswer.textContent = 'Sorry, you got it wrong.'
            answerBox.append(wrongAnswer)
            let alsoNextQuestion = document.createElement('button')
            alsoNextQuestion.className = 'next-question'
            alsoNextQuestion.textContent = 'Next Question'
            answerBox.append(alsoNextQuestion)
            alsoNextQuestion.addEventListener('click', () => {
              questions[0].style.backgroundColor = 'red'
              questions[0].style.color = 'white'
              answerBox.removeChild(currentQuestion)
              answerBox.removeChild(wrongAnswer)
              answerBox.removeChild(alsoNextQuestion)
            })
          }
        })
        answerDivsArray.push(answerDiv)
      })
      answerDivsArray.sort(() => Math.random() - 0.5);
      answerDivsArray.forEach(element => {
        answerBox.append(element)
      })
      e.target.removeEventListener('click', handleClick, false)
    })
  }
}
