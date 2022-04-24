let question = document.querySelector('.quiz__h1 h1');
let quizBack = document.querySelector('.quiz');
let quiz = document.querySelector('.quiz__holder');
let optionsInner = document.querySelectorAll('.option p');
let options = document.querySelectorAll('.option');
let button = document.querySelector('#start');
let buttonNext = document.querySelector('#next');
let buttonAgain = document.querySelector('#again');
let win = document.querySelector('#win');
let questionIndex = 0;
let playerPoints = 0;

button.addEventListener('click', startGame);

function startGame() {
    this.style.display = "none";
    quiz.style.display = "flex";
    generateQuestions();
}

function generateQuestions() {
    if (questionIndex == questions.length) {
        

        checkWinner();
    
    }else {

    

    buttonNext.style.display = "none";

    options.forEach(arg => {
        arg.style.backgroundColor = "white";
    });

    question.innerHTML = questions[questionIndex].question;
        let optionCopy = [...questions[questionIndex].option];
        let newOptions = [];
        for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * optionCopy.length);
        newOptions.push(optionCopy[random]);
        optionCopy.splice(random, 1);
        optionsInner[i].innerHTML = newOptions[i];
    }

    options.forEach(arg => {
        arg.addEventListener('click', nextQuestion);
    })

}
}

function nextQuestion() {
    

    let correctAnswer = questions[questionIndex].correct;
   
    questionIndex++;

    if (correctAnswer == this.querySelector('p').innerHTML) {
        
        options.forEach(arg => {
            arg.removeEventListener('click', nextQuestion);
        });
     
        buttonNext.style.display = "block";
        this.style.backgroundColor = "green";
        playerPoints += 5;
       
        buttonNext.addEventListener('click', generateQuestions);
    }else {
        
        generateQuestions();
    }
}


function checkWinner() {
    
    question.innerHTML = "Quiz";
    buttonNext.style.display = "none";
    buttonAgain.style.display = "block";
    win.style.display = "block";
        quizBack.style.display = "none";
 
    buttonAgain.addEventListener('click', function () {
        questionIndex = 0;
        playerPoints = 0;
        quizBack.style.display = "block";
       quiz.style.display = "none";
       buttonAgain.style.display = "none";

       win.style.display = "none";
       button.style.display = "block";
    })

    if (playerPoints >= 15) {
        
        win.innerHTML = `Good job, you got ${playerPoints} points from ${(questions.length * 5)}.`;
    }else {
       
        win.innerHTML = `Next time soldier, you got ${playerPoints} points from ${(questions.length * 5)}.`;
    }
     
}


let questions = [
    {
        question : "Koji je glavni grad Srbije?",
        option : ["Beograd","Zagreb","Pristina","Trstenik"],
        correct : "Beograd"
    },

    {
        question : "Ko je najbolji bodybuilder svih vremena?",
        option : ["Ronnie Coleman","Arnold","Jay cutler","Markus ruhl"],
        correct : "Ronnie Coleman"
    },

    {
        question : "Ko je najbrzi covek ikada?",
        option : ["Usain Bolt","Cristiano","Dango","Vlaus"],
        correct : "Usain Bolt"
    }
]