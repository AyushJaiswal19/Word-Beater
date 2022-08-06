window.addEventListener("load",init)

const wordInput= document.querySelector("#word-input")
const currentWord= document.querySelector("#current-word")
const scoreDisplay= document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const msg = document.querySelector("#message")

let score=0
let time=6
// const 
 const words=[
'Colonel',                                                             
'Worcestershire',
'Mischievous',
'Draught',
'Quinoa',
'Onomatopoeia',
'Scissors',
'Anemone',
'Isthmus',
'Otorhinolaryngologist',
'Squirrel',
'Ignominious',
'Successful',
'Sixth',
'Phenomenon',
'Rural',
'Specific',
'Synecdoche',
'Temperature',
'Often',
 ];
//main function
 function init()
 {
    showWord(words)
    wordInput.addEventListener("input",startMatch)
    setInterval(countdown,1000)
 }

function startMatch(){
   if(matchWord()){
      showWord(words)
      wordInput.value = ''
      score++
      time=6
   }
   scoreDisplay.innerHTML = score
}

function matchWord(){
   if(currentWord.innerHTML== wordInput.value){
      msg.innerHTML = "Correct!!!"
      return true
   }
   msg.innerHTML = "Incorrect!!!"
   return false

}

 //random words
 function showWord(words){
    const randomIdx= Math.floor(Math.random()*words.length)
    currentWord.innerHTML= words[randomIdx]
 }

 function countdown(){
   if(time>0){
      time--
   }
   timeDisplay.innerHTML = time
 }