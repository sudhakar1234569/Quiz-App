const quizData = [
    {
        question:'What is your name?',
        a:'s',
        b:'a',
        c:'d',
        d:'q',
        correct:'a'
    },{
        question:'My fav language?',
        a:'py',
        b:'java',
        c:'js',
        d:'web',
        correct:'b'
    },{
        question:'my age?',
        a:'20',
        b:'19',
        c:'18',
        d:'17',
        correct:'a'
    },{
        question:'my fav color',
        a:'blue',
        b:'red',
        c:'black',
        d:'white',
        correct:'a'
    },{
        question:'my fav car',
        a:'bugatti',
        b:'audi',
        c:'benz',
        d:'bmw',
        correct:'b'
    }
];
const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currectQuiz= 0;
let score =0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
   const currectQuizData = quizData[currectQuiz];
    questionE1.innerText =  currectQuizData.question;

     a_text.innerText = currectQuizData.a;
     b_text.innerText = currectQuizData.b;
     c_text.innerText = currectQuizData.c;
     d_text.innerText = currectQuizData.d;

}

function getSelected(){
     const answersEls = document.querySelectorAll(".answer");
     let answer = undefined;
     answersEls.forEach((answerE1) =>{
         if(answerE1.checked){
             answer= answerE1.id;
         }

     });
     return answer;
}

function deselectAnswers(){
    answersEls.forEach((answerE1) =>{
     
       answerE1.checked = false;

    });
}

submitBtn.addEventListener('click',() =>{

    const answer =  getSelected();
    console.log(answer); 
    if(answer){
        if(answer === quizData[currectQuiz].correct){
            score++;
        }
        currectQuiz++;
        if(currectQuiz < quizData.length){
            loadQuiz(); 
        }
        else{
            quiz.innerHTML = `<h2> Your score is ${score}/ 
            ${quizData.length}</h2> <button onclick="location.reload()">Reload</button>`
        }
        
    }
  
    
});