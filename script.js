//SCRIPT FOR THE QUIZ APP

//THE LIST OF QUESTIONS (an array of Javascript Objects 
//                      (which are the question/answer pairs))
//THE ANSWERS ARE ALSO AN ARRAY OF JAVASCRIPT OBJECTS (Key = the answer value
//                                                     Value = if the answer is correct (true/false))
const questions = [
    {
        question: "How many Stanley Cup titles have the Bruins won?",
        answers: [
            {text: "8", correct: false},
            {text: "10", correct: false},
            {text: "6", correct: true},
            {text: "2", correct: false}
        ],
        imageSrc: "https://i.pinimg.com/originals/8b/35/cf/8b35cfa77d3f5ab9203d92420e45cbb0.jpg",
        caption: "The Bruins were Stanley Cup champions in 1929, 1939, 1941, 1970, 1972 and 2011"
    },
    {
        question: "Who are the Bruins' biggest rivals?",
        answers: [
            {text: "The New York Islanders", correct: false},
            {text: "The Florida Panthers", correct: false},
            {text: "The Washington Capitals", correct: false},
            {text: "The Montreal Canadiens", correct: true}
        ],
        imageSrc: "https://www.si.com/.image/t_share/MTY4MjYyNjkwNjMyMzEyMDg1/bruins-canadiens.jpg",
        caption: "Boston-Montreal is the most played match in NHL history, and is also hockey's biggest rivalry"
    },
    {
        question: "Which Bruin has the all time record for most points scored?",
        answers: [
            {text: "Raymond Bourque", correct: true},
            {text: "Bobby Orr", correct: false},
            {text: "Johnny Bucyk", correct: false},
            {text: "Phil Esposito", correct: false}
        ],
        imageSrc: "https://cdn.theathletic.com/app/uploads/2020/06/11114902/Ray-Bourque-e1591914729682.jpg",
        caption: "Defenseman Raymond Bourque scored 395 goals and 1,111 assists for 1,518 points in his 21-year tenure with the Bruins"
    },
    {
        question: "Which Bruins goalie has most recently won the Vezina Trophy",
        answers: [
            {text: "Tim Thomas", correct: false},
            {text: "Linus Ullmark", correct: true},
            {text: "Tuukka Rask", correct: false},
            {text: "Jeremy Swayman", correct: false}
        ],
        imageSrc: "https://staticg.sportskeeda.com/editor/2023/04/78f7c-16812688330777-1920.jpg?w=840",
        caption: "While Tim Thomas and Tuukka Rask have both won the Vezina Trophy, Linus Ullmark won his Vezina in the 2022-23 season"
    },
    {
        question: "Which of these Bruins has worn the jersey number 70?",
        answers: [
            {text: "Anton Blidh", correct: false},
            {text: "Trent Frederic", correct: false},
            {text: "Malcolm Subban", correct: true},
            {text: "Torey Krug", correct: false}
        ],
        imageSrc: "https://www.sportsnet.ca/wp-content/uploads/2016/02/malcolm-subban.jpg",
        caption: "Boston's first round pick in 2012 and younger brother of former Canadiens legend P.K. Subban played for the Bruins from 2015-17"
    },
    {
        question: "Which of these players were NOT drafted by the Bruins",
        answers: [
            {text: "Patrice Bergeron", correct: false},
            {text: "Brad Marchand", correct: false},
            {text: "David Pastrnak", correct: false},
            {text: "Tuukka Rask", correct: true}
        ],
        imageSrc: "https://bdc2020.o0bc.com/wp-content/uploads/2022/01/Bruins_Rask_Hockey_60472-61df1b11e9812-scaled.jpg",
        caption: "Legendary goaltender Tuukka Rask was drafted by Boston's rival Toronto with the 21st overall pick in 2005, but was traded to Boston in 2006"
    },
    {
        question: "Who was the Bruins' most recent #1 Overall Pick?",
        answers: [
            {text: "Joe Thornton", correct: true},
            {text: "Cam Neely", correct: false},
            {text: "Patrice Bergeron", correct: false},
            {text: "Zdeno Chara", correct: false}
        ],
        imageSrc: "https://cdn.vox-cdn.com/thumbor/Y4muigi8nbuKP3A43yRfLwIfwfI=/327x26:2794x2656/1200x800/filters:focal(1147x154:1627x634)/cdn.vox-cdn.com/uploads/chorus_image/image/66358884/81054438.jpg.0.jpg",
        caption: "Joe Thornton was the first overall pick in the 1997 draft and played with the Bruins until 2005, when he was traded to and subsequently became a club legend for the San Jose Sharks"
    },
    {
        question: "Which former Bruin was the tallest player in the history of the NHL?",
        answers: [
            {text: "David Krejci", correct: false},
            {text: "Tyler Seguin", correct: false},
            {text: "Zdeno Chara", correct: true},
            {text: "Brandon Carlo", correct: false}
        ],
        imageSrc: "https://www.tsn.ca/polopoly_fs/1.1211540!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/zdeno-chara.jpg",
        caption: "The former 14-year captain of the Bruins stands at 6 feet 9 inches tall"
    },
    {
        question: "In what year did the Bruins break the NHL regular season records for most points and win in a season?",
        answers: [
            {text: "1075-76", correct: false},
            {text: "1992-93", correct: false},
            {text: "2010-11", correct: false},
            {text: "2022-23", correct: true}
        ],
        imageSrc: "https://pbs.twimg.com/media/FtpBCsOWYAApF2F.jpg:large",
        caption: "The Bruins won 65 games and 135 standings points in the 2022-23 regular season"
    },
    {
        question: "Who was the Bruins' Conn Smyth Trophy winner in their 2011 Stanley Cup Championship?",
        answers: [
            {text: "Patrice Bergeron", correct: false},
            {text: "Tim Thomas", correct: true},
            {text: "David Krejci", correct: false},
            {text: "Zdeno Chara", correct: false}
        ],
        imageSrc: "https://www.rrstar.com/gcdn/authoring/2011/06/16/NRRS/ghows-IR-3494ee3b-2dcd-418c-be44-59747343bbf2-2bf90102.jpeg",
        caption: "The goaltender's performance throughout the 2011 playoffs earned him the Conn Smythe trophy over teammate David Krejci, who also impressed during the playoffs"
    }
];

//PUTTING THE QUESTIONS/ANSWERS/NEXT BUTTON INTO THE APP
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const answerImage = document.getElementById("answer-image");
const imageCaption = document.getElementById("caption");

let currentQuestionIndex = 0; //NUMBER OF QUESTIONS ASKED
let score = 0; //NUMBER OF CORRECT ANSWERS

//RESETS QUESTION INDEX TO 0 TO START GAME
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    answerImage.style.display = "none";
    imageCaption.style.display = "none";
    showQuestion();
}

//DISPLAYS QUESTION
function showQuestion(){
    resetState(); //RESETS PREVIOUS QUESTION AND ANSWERS
    let currentQuestion = questions[currentQuestionIndex]; //PICKS  QUESTION FROM questions ARRAY, STORES IT INTO currentQuestion VARIABLE
    let questionNo = currentQuestionIndex + 1; //NEW VARIABLE questionNo IS THE QUESTION NUMBER
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; //DISPLAYS QUESTION NUMBER AND QUESTION IN THE APP

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); //CREATES A NEW BUTTON OBJECT IN JAVASCRIPT
        button.innerHTML = answer.text; //ADDING THE ANSWERS TO OUR JAVASCRIPT BUTTON
        button.classList.add("btn"); //DISPLAY JAVASCRIPT BUTTON IN HTML
        answerButton.appendChild(button); //ADDS THE REST OF THE ANSWERS
        if (answer.correct){
            button.dataset.correct = answer.correct; //BUTTON'S correct VARIABLE NOW SET TO true
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none"; //RESETS NEXT BUTTON
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild); //REMOVES ALL PREVIOUS ANSWERS
    }
}

function displayImage(){
    answerImage.src = questions[currentQuestionIndex].imageSrc;
    imageCaption.innerHTML = questions[currentQuestionIndex].caption;
    answerImage.style.display = "block";
    imageCaption.style.display = "inline"
}

//FUNCTIONALITY FOR SELECTING ANSWER
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score ++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    //HIGHLIGHTS THE CORRECT ANSWER WHEN INCORRECT ANSWER IS CHOSEN
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct"); 
        }
        button.disabled = true; //DISABLES THE ABILITY TO CLICK ANY OTHER ANSWER BUTTONS ONCE ANSWER IS CHOSEN
    });
    displayImage();
    nextButton.style.display = "block"; //SETS NEXT BUTTON DISPLAY TO BLOCK, MEANING THAT WE CAN CLICK "NEXT"
}

//SHOWS SCORE AFTER COMPLETEING THE QUIZ
function showScore(){
    resetState(); //RESET THE QUIZ
    answerImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Boston_Bruins.svg/1200px-Boston_Bruins.svg.png";
    imageCaption.style.display = "none";
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; //INSTEAD OF THE NEXT BUTTON DISPLAYING "NEXT", DISPLAY SCORE/NUMBER OF QUESTIONS
    nextButton.innerHTML = "Play Again"; //NEXT BUTTON TEXT REPLACED WITH "PLAY AGAIN"
    nextButton.style.display = "block"; //NEXT BUTTON IS HIDDEN
}

//DISPLAYING THE NEXT QUESTION OR SCORE
function handleNextButton(){
    currentQuestionIndex ++; //INCREASES THE QUESTION INDEX
    if (currentQuestionIndex < questions.length) { //IF THERE IS A NEXT QUESTION, DISPLAY THEM
        answerImage.style.display = "none";
        imageCaption.style.display = "none";
        showQuestion();
    } else { //IF THERE ARE NO MORE QUESTIONS, SHOW THE SCORE
        showScore();
    }
}

//FUNCTIONALITY FOR THE NEXT BUTTON
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) { //IF THERE ARE STILL MORE QUESTIONS, DISPLAY THEM
        handleNextButton();
    } else { //IF THERE ARE NO MORE REMAINING QUESTIONS, RESTART THE QUIZ
        startQuiz();
    }
});

startQuiz();