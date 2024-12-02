//Get user name

let userName = prompt('Hello what is your name');

let responceImg = document.getElementById('response-img')
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
      imageChoice = 'img1.jpg'
    } else if (randomNumber === 1) {
      eightBall = 'It is decidedly so';
      imageChoice = 'img7.png'
    } else if (randomNumber === 2) {
      eightBall = 'Reply hazy, try again';
      imageChoice = 'istockphoto-1162198273-612x612.jpg'
    } else if (randomNumber === 3) {
      eightBall = 'Cannot predict now';
      imageChoice = 'img4.png';
    } else if (randomNumber === 4) {
      eightBall = 'Do not count on it';
      imageChoice = 'img6.jpg';
    } else if (randomNumber === 5) {
      eightBall = 'My sources say no';
      imageChoice = 'img5.jpg';
    } else if (randomNumber === 6) {
      eightBall = 'Outlook not so good';
      imageChoice = 'img2.png';
    } else if (randomNumber === 7) {
      eightBall = 'Signs point to yes';
      imageChoice = 'img1.jpg';
    }
    
    
    console.log(`The Magic Eight Ball says: ${eightBall}`);
    
    document.getElementById('responce-text').innerText = `${userName} has asked ${userQuestion} to the 8-Ball the 8-ball has replied ${eightBall}`
    responceImg.src = imageChoice
}

