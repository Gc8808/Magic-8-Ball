//Get user name

let userName = prompt('Hello what is your name');

let responceImg = document.getElementById('responce-img')
let responceText= document.getElementById('responce-Text')
let greeting = document.getElementById ('greeting') 

//Imput user name to website
userName ? document.getElementById('greeting').innerText=`Hello, ${userName}!`: document.getElementById('greeting').innerText = 'Hello Stranger'



function shakeMagic8Ball(){
    //Get user question
    let userQuestion = prompt('Enter your question for the 8-Ball') 

  
    
    //Do not touch
    let randomNumber = Math.floor(Math.random() * 8);
    
    
    let eightBall = '';
    let imageChoice = '';
    if (randomNumber === 0) {
      eightBall = 'It is certain';
      imageChoice = '';
    } else if (randomNumber === 1) {
      eightBall = 'It is decidedly so';
      imageChoice = '';
    } else if (randomNumber === 2) {
      eightBall = 'Reply hazy, try again';
      imageChoice = '';
    } else if (randomNumber === 3) {
      eightBall = 'Cannot predict now';
      imageChoice = '';
    } else if (randomNumber === 4) {
      eightBall = 'Do not count on it';
      imageChoice = '';
    } else if (randomNumber === 5) {
      eightBall = 'My sources say no';
      imageChoice = '';
    } else if (randomNumber === 6) {
      eightBall = 'Outlook not so good';
      imageChoice = '';
    } else if (randomNumber === 7) {
      eightBall = 'Signs point to yes';
      imageChoice = '';
    }
    
    
    console.log(`The Magic Eight Ball says: ${eightBall}`);
    
    document.getElementById('responce-text').innerText = `${userName} has asked ${userQuestion} to the 8-Ball the 8-ball has replied ${eightBall}`
    responceImg.src = imageChoice
}

