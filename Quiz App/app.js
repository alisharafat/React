const Data=[
    {
        question:"Where is the capital of India?",
        a:"Bihar",
        b:"UP",
        c:"New Delhi",
        d:"Mumbai",
        correct:"c",
    },
    {
        question:"Which of the following is a food delivery app ?",
        a:"paytm",
        b:"zomato",
        c:"uber",
        d:"amazon",
        correct:"b",
    },
    {
        question:"Who is the captain of India in ODI ? ",
        a:"Virat",
        b:"Rahul",
        c:"pant",
        d:"Rohit",
        correct:"d"
    },
    {
        question :"Who is the chief minister of Bihar",
        a:"Nitish Kumar",
        b:"Lalu Yadav",
        c:"Tejasvi Yadav",
        d:"Modi",
        correct:"a",
    },
    {
        question :"Most Popular programming Language ?",
        a:"Java",
        b:"Javascript",
        c:"Python",
        d:"C++",
        correct:"b",
    },
];



const quiz=document.getElementById('quiz');
const question=document.getElementById('que');
const answerEl =document.querySelectorAll('.answer');
const option_a =document.getElementById('option_a');
const option_b =document.getElementById('option_b');
const option_c =document.getElementById('option_c');
const option_d =document.getElementById('option_d');
const submitButton=document.getElementById('submit');

let currentQuiz =0;
let marks=0;
startQuiz();
submitButton.addEventListener('click',()=>{
    let flag=false;
    for(let i=0;i<4;i++){
        if(answerEl[i].checked==true){

            flag=true;
            let ans=answerEl[i].id;
            if(Data[currentQuiz].correct ==ans){
                marks++;
            }
            break;
        }
    }
   if(flag==true){
       if(currentQuiz < Data.length-1){
        currentQuiz++;
        startQuiz();

       }
       else{
           
           quiz.innerHTML=`<h1 >Quiz Completed !!! Your marks is =${marks} </h1>`;
       }
 

    deselectOptions();
   }

})

function deselectOptions(){
    for(let i=0;i<4;i++){
        answerEl[i].checked=false;
    }
    
}



function startQuiz(){
    // deselectOptions();

    question.innerText=Data[currentQuiz].question;
    option_a.innerText=Data[currentQuiz].a;
    option_b.innerText=Data[currentQuiz].b;
    option_c.innerText=Data[currentQuiz].c;
    option_d.innerText=Data[currentQuiz].d;
}



