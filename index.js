'use strict'

let secretnum= Math.trunc(Math.random()*20)+1

let score = 20;

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor='#222'
    hidden()
})


const hidden =function(){
    document.querySelector('.number').textContent= "?"
    document.querySelector('.number').style.width="15rem"
    message("Start guessing...")
    document.querySelector('.guess').value=" "
    secretnum= Math.trunc(Math.random()*20)+1
    document.querySelector('.score').textContent=20
} 

let high=0
const message =(x)=>{
    document.querySelector('.message').textContent=x
}

document.querySelector('.check').addEventListener('click',function(){
    message('🎉 correct number')
    const empty =Number(document.querySelector('.guess').value)
    

    if (!empty){
        '🎇 no number'
    }else if(empty===secretnum){
        message('🎈 congrats ') 
        document.querySelector('.number').textContent= secretnum 
        document.querySelector('body').style.backgroundColor='#60b347'
        document.querySelector('.number').style.width='30rem'
        if (score > high){
            high=score
            document.querySelector('.highscore').textContent=high
        }
    }else if(empty !==secretnum){
        if(score>1){
                        message(empty>secretnum ?'Too high':'Too low')
                        score--
                        document.querySelector('.score').textContent=score
                        
            }else{
                        message('you lost the game')
                        document.querySelector('.score').textContent=0
         }
    }

})
