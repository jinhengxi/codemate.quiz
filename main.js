let tenMillis = 0;
let seconds = 0;
let minutes = 0;
let Intervar;
const tenMillisDisplay = document.querySelector('.tenMillis');
const secondsDisplay = document.querySelector('.seconds');
const minutesDisplay = document.querySelector('.minutes');


function start(){
  clearInterval(Intervar);
  Intervar = setInterval(Timer,10);
}

function stop(){
  clearInterval(Intervar);
}

function reset(){
  clearInterval(Intervar);
  tenMillis = 0;
  seconds = 0;
  minutes = 0;
  tenMillisDisplay.innerText = '00';
  tenMillisDisplay.innerText = '00';
  secondsDisplay.innerText = '00';
}

function Timer(){
  tenMillis++;
  tenMillisDisplay.innerText = tenMillis > 9 ?tenMillis :'0'+ tenMillis;
  if( tenMillis > 99 ){
    seconds++;
    secondsDisplay.innerText = seconds > 9 ?seconds :'0'+ seconds;
    tenMillis = 0;
    tenMillisDisplay.innerText = '00';
  }
  if( seconds > 59 ){
    minutes++;
    minutesDisplay.innerText = minutes > 9 ?minutes :'0'+ minutes;
    seconds = 0;
    secondsDisplay.innerText = '00';
  }
}





let content = '코드메이트!';
let count = 0;
let colorCode;
let plus = content.split('')

const btnDisplay = document.querySelector('.btn_display');
const Display = document.querySelector('.display');


btnDisplay.addEventListener('click',()=>{
  if( count < plus.length ){
    Display.innerText += plus[count];
    colorCode = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    Display.style.color = colorCode;
    count++;
  }else{
    Display.innerText = '';
    count = 0;
  }
})




const movies = [
  {
    title : '인셉션',
    year : 2010,
    content : '액션/SF'
  },
  {
    title : '인터스텔라',
    year : 2014,
    content : 'SF'
  },
  {
    title : '말할수없는비밀',
    year : 2007,
    content : '판타지'
  }
]

const movieBtn = document.querySelectorAll('.movie_btn');
const movieTitle = document.querySelector('.movie_title');
const movieYear = document.querySelector('.movie_year');
const movieContent = document.querySelector('.movie_content');

for(let i = 0; i < movieBtn.length; i++){
  movieBtn[i].onclick = ()=>{
      movieTitle.innerText = movies[i].title
      movieYear.innerText = movies[i].year
      movieContent.innerText = movies[i].content
  }
}




    // movieTitle.innerText = movies[i].title
    // movieYear.innerText = movies[i].year
    // movieContent.innerText = movies[i].content