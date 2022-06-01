
var startButton = document.getElementById(".start_btn button");

var info_box = document.getElementById(".info_box");

var nextButton = document.getElementById('next-btn');

var questionContainerElement = document.getElementById('question-container');

var questionElement = document.getElementById('question');

var answerButtonsElement = document.getElementById('answer-buttons');

var shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion();
})


var questions = [
    {
        question: 'What does HTML stand for?',
        answers:[
            {text: 'Hyper text Preprocessor', correct: true},
            {text: 'Hyper Text Markup Language', correct: false},
            {text: 'Hyper Text Multiple Language', correct: false},
            {text: 'Hyper Text Multi Language', correct: false}
            
        ]
    },
    {
        question: ' Arrays in JavaScript can be used to store',
        answers:[
            {text: 'Numbers and strings', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'booleans', correct: false},
            {text: 'all of the above', correct: true}
            
        ]
    },
    {
        question: ' What does CSS stand for?',
        answers:[
            {text: 'Hyper text Preprocessor', correct: false},
            {text: 'Computer Style Sheet', correct: false},
            {text: 'Hyper Text Multiple Language', correct: false},
            {text: 'Cascading Style Sheet', correct: true}
            
        ]
    },
    {
        question: ' The condition in an if/else statement is enclosed with ______',
        answers:[
            {text: 'Quotes', correct: false},
            {text: 'Curly Brackets', correct: false},
            {text: 'Parenthesis', correct: true},
            {text: 'Square Brackets', correct: true}
            
        ]
    },

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


