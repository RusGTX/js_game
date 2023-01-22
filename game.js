//Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random()*10)+1
//show guesses
const guesses = document.querySelector('.guesses')


//show lastResult
const lastResult = document.querySelector('.lastResult')
//show low or high value
const lowOrHigh = document.querySelector('.lowOrHigh')
//link to gusses Submit button
const guessSubmit = document.querySelector('.guessSubmit')
//link to guesses Filed
const guessField = document.querySelector('.guessField')

//strating point
let guessCount = 1
//reset value
let resetButton

function checkGuess(){
    //receiving user's value
    let userGuess = Number(guessField.value)
    if(guessCount === 1){
        guesses.textContent = 'Previous guesses: '
    }
    guesses.textContent =+ userGuess + ' '

    if(userGuess === randomNumber){
        lastResult.textContent = 'Congratulations! You win!'
        lastResult.style.backgroundColor = 'green'
        lastResult.style.fontSize = '200%'
        lastResult.style.padding = '10px'
        lowOrHigh.textContent = ''
        //reset game
        setGameOver()
    }else if(guessCount === 10){//count attempts
        lastResult.textContent = '!!!Game Over!!!'
        setGameOver()
    }else{
        lastResult.textContent = 'Wrong!'
        lastResult.style.backgroundColor = 'red'
        if(userGuess < randomNumber){
            lowOrHigh.textContent = 'Last guess was too low'
        }else if(userGuess > randomNumber){
            lowOrHigh.textContent = 'Last guess was too high'
        }
    }


    guessCount++ //add 1 to new attempt 
    guessField.value = '' //clean text-field
    guessField.focus() //focus on text-field    
}

guessSubmit.addEventListener('click', checkGuess)

function setGameOver(){
    guessField.disabled = true //turn off new input
    guessSubmit.disabled = true //turn off button
    resetButton = document.createElement('button') //generate new button
    resetButton.textContent = 'Start new game'
    document.body.appendChild(resetButton) //adding new button to HTML
    resetButton.addEventListener('click', resetGame) //create new listener
}

function resetGame(){
    guessCount = 1 //setting new value to 1

    var resetParas = document.querySelectorAll('.resultParas p')
    guessField.focus()

    for(var i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = '' //delete all info points
    }

    resetButton.parentNode.removeChild(resetButton) //delete reset button

    guessField.disabled = false //turns on text-field 
    guessSubmit.disabled = false //turns on focus
    guessField.value = ''
    guessField.focus()

    lastResult.style.backgroundColor = 'white' //delete back color

    randomNumber = Math.floor(Math.random()*100)+1 //create new random value
    
}