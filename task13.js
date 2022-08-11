let questions = document.querySelectorAll('.accordion');
let answer = document.querySelectorAll('.answers');
let arrowDown = document.querySelectorAll('.arrow');
let lines = document.querySelectorAll('.line');
let answersOpen;
console.log(answer)
for(let i=0; i<questions.length; i++){
    questions[i].addEventListener('click', function(){

        for(let j=0; j<answer.length; j++){
            if(j == i){
                answer[j].classList.toggle('answerActive');
                questions[i].classList.toggle('questionActive')
            }else{
                answer[j].classList.remove('answerActive');
                questions[j].classList.remove('questionActive')
            }
        }

        for(let j=0; j<arrowDown.length; j++){
            if(j == i){
                arrowDown[j].classList.toggle('arrow_active')
            }else{
                arrowDown[j].classList.remove('arrow_active')
            }
        }
    })
    
}

