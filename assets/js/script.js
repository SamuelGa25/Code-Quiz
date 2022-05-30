
var startButton = document.getElementById('start-btn');

var nextButton = document.getElementById('next-btn');

var questionContainerElement = document.getElementById('question-container');

var questionElement = document.getElementById('question');

var answerButtonsElement = document.getElementById('answer-buttons');

var shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    showQuestion()
})




var questions = [
    {
        question: 'What is 2+2?',
        answers:[
            {text: '4', correct: true},
            {text: '22', correct: false}
            
        ]
    }
]



function startGame(){
    console.log('started');

    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');


    shuffledQuestions = questions.sort(()=>Math.random()-.5)
    currentQuestionIndex = 0

    setNextQuestion()

}

function showQuestion(question){
    questionElement.innerText = question.question

    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    });

}

function selectAnswer(e){
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct
    
    setStatusClass(document.body, correct);

    Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct){
    ClearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function ClearStatusClass(element){
    element.classList.add('correct')
    element.classList.add('wrong')
}



function resetState(){
    ClearStatusClass(document.body)
    
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function ClearStatusClass(element){
    element.classList.add('correct')
    element.classList.add('wrong')
}


