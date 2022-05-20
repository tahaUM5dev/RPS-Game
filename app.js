var userScore = 1;
var compScore = 1;
const userRecord = document.getElementById('userS');
const compRecord = document.getElementById('compS');
const result = document.querySelector('p');
const paper = document.getElementById('ppr');
const rock = document.getElementById('rk');
const scissor = document.getElementById('sr');
const chs = document.getElementsByClassName('choice');


 

paper.addEventListener('click', ppr0);
scissor.addEventListener('click', sr0);
rock.addEventListener('click', rk0)


// first switch

function sr0(){
    let comch = chs[Math.floor(Math.random() * chs.length)].id;
  switch (comch) {
      case 'ppr':
          result.style.color= 'green';
          result.innerHTML ='YOU WIN !';
          userRecord.innerHTML = userScore++;
          break;
      case 'rk':
         result.style.color= 'red';
          result.innerHTML ='YOU LOSE !';
          compRecord.innerHTML = compScore++;
          break;
      case 'sr':
          result.style.color= 'blue';
          result.innerHTML ='DRAW'
          break;  
  }
}



function ppr0(){
    let comch = chs[Math.floor(Math.random() * chs.length)].id;
  switch (comch) {
      case 'ppr':
          result.style.color= 'blue';
          result.innerHTML ='DRAW'
          break;
      case 'rk':
          result.style.color= 'green';
          result.innerHTML ='YOU WIN !'
          userRecord.innerHTML = userScore++;
          break;
      case 'sr':
          result.style.color= 'red';
          result.innerHTML ='YOU LOSE !';
          compRecord.innerHTML = compScore++;
          break;  
  }
}


function rk0(){
    let comch = chs[Math.floor(Math.random() * chs.length)].id;
  switch (comch) {
      case 'ppr':
          result.style.color= 'red';
          result.innerHTML ='You LOSE !'
          compRecord.innerHTML = compScore++;
          break;
      case 'rk':
          result.style.color= 'blue';
          result.innerHTML ='DRAW'
          break;
      case 'sr':         
          result.style.color= 'green';
          result.innerHTML ='YOU WIN !'
          userRecord.innerHTML = userScore++;
          break;  
  }
}



