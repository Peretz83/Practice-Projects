let questionDiv = document.getElementById("questionDiv")
let answerOptionsSec = document.getElementById("answerOptionsSec")
let backBtn = document.getElementById("backBtn")
let score = document.getElementById("score")
let nextBtn = document.getElementById("nextBtn")
let restartBtn = document.getElementById("restartBtn")
let gameWrap = document.getElementById("gameWrap")

let questionArr = [
  {
question:"1. How old am I?",
answers:["37","22","14","39"],
correctAnswer:'37'
},
  {
question:"2. How Tall am I?",
answers:["5.6","5.4","6.7","5.8"],
correctAnswer:'5.8'
},
  {
question:"3. Where do I live?",
answers:["Jerusalem","Tel-Aviv","Rishone","Kiryat-Ono"],
correctAnswer:'Rishone'
},
  {
question:"4. What color are my eyes?",
answers:["Hazel","Light-Blue","Brown","Green"],
correctAnswer:'Brown'
},
  {
question:"5. What is my dogs name?",
answers:["Hazel","Bluey","Max","Spot"],
correctAnswer:'Max'
},
  {
question:"6. What car do I drive?",
answers:["BMW","VW","Hyundai","Honda"],
correctAnswer:'Hyundai'
},
  {
question:"7. Who is my favorite basketball player?",
answers:["MJ","LBJ","Shaq","Kobe"],
correctAnswer:'LBJ'
},
  {
question:"8. How many kids do I have?",
answers:["2","5","1","3"],
correctAnswer:'1'
},
  {
question:"9. What is my wifes name?",
answers:["Sharon","Squeezy","Amber","Lisa"],
correctAnswer:'Squeezy'
},
  {
question:"10. What are my favotire Jordans?",
answers:["3","9","4","11"],
correctAnswer:'4'
}
]

let count = 0
let scoreCount = 0

let displayGame = ()=>{
  score.textContent= `${scoreCount}/10`

  questionDiv.textContent = questionArr[count].question

  for(let i = 0;i<questionArr[count].answers.length;i++){
    let myAnswers = document.createElement("h1")
    myAnswers.classList = "actualAnswers"
    answerOptionsSec.appendChild(myAnswers)
    myAnswers.textContent = questionArr[count].answers[i]
  }

  let realAnswers = document.querySelectorAll('.actualAnswers')

  realAnswers.forEach((item)=>{
    item.addEventListener('click', (e)=>{
      if(e.target.textContent === questionArr[count].correctAnswer){
        e.target.style.backgroundColor = "green"
        scoreCount+=1
        score.textContent = `${scoreCount}/10`
        setTimeout(()=>{
          answerOptionsSec.innerHTML=""
          count+=1
          displayGame()
        },1000)
        if(count > 8){
          setTimeout(()=>{
          questionDiv.textContent = 'Quiz Over......!!!'
          backBtn.style.display = 'none'
          nextBtn.style.display = 'none'
          },1000)
        }
      }
      else{
        e.target.style.backgroundColor = "red"
        setTimeout(()=>{
          answerOptionsSec.innerHTML=""
          count+=1
          displayGame()
        },1000)
        if(count > 8){
          setTimeout(()=>{
            questionDiv.textContent = 'Quiz Over......!!!'
            backBtn.style.display = 'none'
            nextBtn.style.display = 'none'
          },1000)
          
        }
      }
       
    })
  })
}
displayGame()

nextBtn.addEventListener('click', ()=>{
  answerOptionsSec.innerHTML=""
  count+=1
  displayGame()
  if(count === questionArr.length-1){
    count=-1
  }
})

backBtn.addEventListener('click', ()=>{
  answerOptionsSec.innerHTML=""
  count-=1
  console.log(count);
  if(count < 0){
   count = questionArr.length-1
  }
  displayGame()
})

restartBtn.addEventListener('click', ()=>{
  answerOptionsSec.innerHTML=""
  count = 0
  scoreCount = 0
  displayGame()
  backBtn.style.display = 'block'
  nextBtn.style.display = 'block'
  score.textContent = `${scoreCount}/10`
})


