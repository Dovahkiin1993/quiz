const question = document.querySelector("#question")
const choices = Array.from(document.querySelectorAll(".choice-text"))
const progressText = document.querySelector("#progressText")
// const scoreText = document.querySelector("#hud-prefix")
const progressBarFull = document.querySelector("#progressBarFull")
var  timerEl = document.querySelector("#timer")
let currentQuestion = {}
let acceptingAnswers = true
let questionCounter = 0
let availableQuestions =[]
 let timer = 0
let questions = [
    {
    question:  'Inside which HTML element do we put the JavaScript?' ,
     choice1:  '<scripting>',
     choice2:  '<Javascript>',
     choice3:  '<js>',
     choice4:  '<script>',
     answer: 4,
    },

    {
        question:  'What is the correct JavaScript syntax to change the content of the HTML element below?' ,
         choice1:  'document.getElementByName("p").innerHTML = "Hello World!";',
         choice2:  'document.getElementById("demo").innerHTML = "Hello World!"; ',
         choice3:  '#demo.innerHTML = "Hello World!";',
         choice4:  'document.getElement("p").innerHTML = "Hello World!";',
         answer: 2,
        },

        {
            question:  'How do you write "Hello World" in an alert box?' ,
             choice1:  'alert("Hello World");',
             choice2:  'msgBox("Hello World");',
             choice3:  'msg("Hello World");',
             choice4:  'alertBox("Hello World");',
             answer: 1
            },

            {
                question:  'How to write an IF statement in JavaScript?' ,
                 choice1:  'if i = 5 ',
                 choice2:  'if i == 5 then',
                 choice3:  'if (i == 5)',
                 choice4:  'if i = 5 then',
                 answer: 3
                },

]


 const MAX_QUESTIONS = 4
 const DECREMENT_TIME = +10
  
 let count = 60;



 startGame = () => {
     count = 60;
    let timerInterval = setInterval(() => {
        timerEl.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(timerInterval);
            localStorage.setItem('timer', );
            return window.location.assign('end.html');
        }
    }, 1000);

    questionCounter = 0
    timer = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

decreaseTime = num => {
    
    count -= num;
    if (count < 0) {
        count = 0;
    }
    
    count.textContent = timer;
}


getNewQuestion = () => {
if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
    localStorage.setItem('timer', count)

    return window.location.assign('end.html')
}

questionCounter++
progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`


const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
})

availableQuestions.splice(questionsIndex, 1)

acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'incorrect'){
        decreaseTime(DECREMENT_TIME) 
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()

    }, 1000)
    
         })
    
})

    


startGame();


