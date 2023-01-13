//Question bank
var questionBank= [
    {
        question : 'Little interest or pleasure in doing things *',
        option : ['Not at all','Several days','More than half of the days','Nearly every day',],
        answer : 'More than half of the days'
    },
    {
        question : 'Feeling down, depressed, or hopeless *',
        option : ['Not at all','Several days','More than half of the days','Nearly every day',],
        answer : 'More than half of the days'
    },
    {
        question : 'Trouble falling or staying asleep, or sleeping too much *',
        option : ['Not at all','Several days','More than half of the days','Nearly every day',],
        answer : 'More than half of the days'
    },
    {
        question : ' Feeling tired or having little energy *',
        option : ['Not at all','Several days','More than half of the days','Nearly every day',],
        answer : 'More than half of the days'
    },
    {
        question : ' Poor appetite or overeating *',
        option : ['Not at all','Several days','More than half of the days','Nearly every day',],
        answer : 'More than half of the days'
    },
    {
        question : 'Feeling bad about yourself - or that you are a failure or have let yourself or your family down *',
        option : ['Not at all','Several days','More than half of the days','Nearly every day',],
        answer : 'More than half of the days'
    }, 
    {
        question : 'Trouble concentrating on things, such as reading the newspaper or watching television *',
        option : ['Not at all','Several days','More than half of the days','Nearly every day',],
        answer : 'More than half of the days'
    }, 
    {
        question : ' Moving or speaking so slowly that other people could have noticed *',
        option : ['Not at all','Several days','More than half of the days','Nearly every day',],
        answer : 'More than half of the days'
    }, 
    {
        question : 'Thoughts that you would be better off dead, or of hurting yourself  *',
        option : ['Not at all','Several days','More than half of the days','Nearly every day',],
        answer : 'More than half of the days'
    }, 
    {
        question : 'If you have had any days with issues above , how difficult have these problems made it for you at work, home, school, or with other people?*',
        option : ['Not difficult at all','Somewhat difficult','Very difficult','Extremely difficult',],
        answer : 'More than half of the days'
    }, 

]






var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();