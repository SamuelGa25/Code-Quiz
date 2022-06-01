
//defining all the variables with their required element
var startButton = document.getElementById(".start_btn button");

var info_box = document.querySelector(".info_box");
var exit_button = info.box.querySelector(".controls .quit");
var next_button = document.querySelector(".controls .start");




//if start button cliked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
}

exit_btn.onclick =()=>{
    info_box.classList.remove("activeInfo"); //hiding the rules

}

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

}

function showQuestion(question){

}

function selectAnswer(e){

}








