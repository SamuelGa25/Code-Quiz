
//defining all the variables with their required element
var start_button = document.querySelector(".start_btn button");

var rules_box = document.querySelector(".rules_box");
var exit_button = rules_box.querySelector(".controls .quit");
var begin_button = rules_box.querySelector(".controls .start");

//defining container quiz
var container = document.querySelector(".container");
var next_question = container.querySelector('.next_btn');
var multiple_choice = document.querySelector(".multiple_choice");

//defining the result box
var result = document.querySelector(".result");
var restart_button = result.querySelector(".controls .restart");
var exit_quiz = result.querySelector(".controls .final_btn");

//if start button clicked
start_button.onclick = ()=>{
    rules_box.classList.add("activeInfo"); 

    console.log("started");
}
//From the rules box........
//if exit button clicked
exit_button.onclick = ()=>{
    rules_box.classList.remove("activeInfo"); //hiding info box
    console.log("exited")
}
//From the rules box
//if next button clicked
begin_button.onclick = ()=>{
    rules_box.classList.remove("activeInfo"); //hiding info rules
    container.classList.add("activeQuiz");

    console.log("quiz started");
    showQuestion(0);

}


//defining the variables for the math part
var ques_count= 0;
var ques_number = 1;
var userScore = 0;
var counter;
//value for time 
var timeAmount = 15;


//From quiz box
//if Next Question button clicked
next_question.onclick=()=>{

    question_count++;
    question_number++;

    container.classList.add("activeQuiz");
    result.classList.remove("activeResult");

    var question_count = 0;
    var question_number = 1;

    showQuestion(question_count);
    questionCounter(question_number);

    clearInterval(counter);

    next_question.style.display = "none";



}

//functionality for the quiz container, showing the question.  
function showQuestion(index){
    var ques_text = document.querySelector(".question");

    var question_tag = '<div class="que_text">'+questions[index].number+"."+questions[index].question+'</div>';
    var choice_tag = '<div class="choice">'+questions[index].choices[0]+'</div>'
                    +'<div class="choice">'+questions[index].choices[1]+'</div>'
                    +'<div class="choice">'+questions[index].choices[2]+'</div>'
                    +'<div class="choice">'+questions[index].choices[3]+'</div>';

    ques_text.innerHTML = question_tag;
    choice_tag.innerHTML = multiple_choice;
    
    var choice = multiple_choice.querySelectorAll(".choice");
    for (var i=0; i< choice.length; i++){
        choice[i].setAttribute('onclick', "choiceSelected(this)");

    }

}

function questionCounter(index){
    var question_count = container.querySelector(".question_count");

    var count_question = '<p>' +index+'</p> of<p>'+questions.length+' Questions</p>';

    question_count.innerHTML = count_question;
    
}


function choiceSelected(answer){

    //always starting clear
    clearInterval(counter);

    var userAnswer = answer.textContent;
    var correctAnswer = questions[ques_count].answer;
    var allChoices = multiple_choice.children.length;

    //if statement whether what option is chosen from the user
    if (userAnswer == correctAnswer){
        userScore +=100;
        console.log("CORRECT!")
        console.log("Current Score: "+userScore);

        answer.classList.add("correct");

    }else{
        //if the answer is wrong don't add to the score.
        console.log("INCORRECT!");
        answer.classList.add("incorrect!");

        //if incorrect, show the right answer!
        for (let i=0; i<allChoices; i++){
            if (multiple_choice.children[i].textContent == correctAnswer){
                multiple_choice.children[i].setAttribute("class","choice correct");
            }
        }
    }
    //once the user selected the option disable everything
    for (var i=0; i<allChoices; i++){
        multiple_choice.children[i].classList.add("disabled");
    }
    next_question.style.display = "block";

}

function showResult(){
    rules_box.classList.remove("activeInfo");
    container.classList.remove("activeInfo");
    result.classList.add("activeInfo");

    var completed_text = result.querySelector(".completed_text")

    // if(user)

}





//An array and passing the number of questions, choices and answers
var questions = [
    {
        number: 1,
        question: 'What does HTML stand for?',
        answer: '2. Hyper Text Markup Language',
        choices:[
            '1.Hyper text Preprocessor',
            '2. Hyper Text Markup Language',
            '3. Hyper Text Multiple Language',
            '4. Hyper Text Multi Language'
            
        ]
    },
    {   
        number: 2,
        question: ' Arrays in JavaScript can be used to store',
        answer:'4. all of the above',
        choices:[
            '1. Numbers and strings',
            '2. Other arrays',
            '3. booleans',
            '4. all of the above'
            
        ]
    },
    {   
        number: 3,
        question: ' What does CSS stand for?',
        answer: '4. Cascading Style Sheet',
        choices:[
            "1. Common Style Sheet", 
            '2. Computer Style Sheet', 
            '3. Colorful Style Sheet',
            '4. Cascading Style Sheet' 
        ]
    },
    {   
        number: 4,
        question: 'The condition in an if/else statement is enclosed with ______',
        answer:'3. Parenthesis', 
        choices:[
            '1. Quotes', 
            '2. Curly Brackets', 
            '3. Parenthesis', 
            '4. Square Brackets', 
        ]
    },

]









