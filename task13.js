let questions = document.querySelectorAll('.accordion');
let answer = document.querySelectorAll('.answers');
let arrowDown = document.querySelectorAll('.arrow');
let arrowUp = document.querySelectorAll('.arrow_active');



for(let i=0; i<questions.length; i++){
    questions[i].addEventListener('click', function(){
        for(let j=0; j<answer.length; j++){
            answer[j].style.display = 'none';
        }
        answer[i].style.display = 'block';


        for(let l=0; l<arrowDown.length; l++){
            arrowDown[l].style.display = 'block';
        }
        arrowDown[i].style.display = 'none';


        for(let k=0; k<arrowUp.length; k++){
            arrowUp[k].style.display = 'none';
        }
        arrowUp[i].style.display = 'block';


        for(let m=0; m<questions.length; m++){
            questions[m].style.fontWeight = '400';
        }
        questions[i].style.fontWeight = '700';
    })
    
}