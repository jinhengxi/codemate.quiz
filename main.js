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




const callName = document.querySelector('.call_name');
const callBtn = document.querySelector('.call_btn');

function call(){
    callName.innerHTML = '스펀지밥';
    callBtn.innerHTML = '010-1234-5678';
}

callBtn.addEventListener('click',()=>{
  callBtn.innerHTML = '전화거는중...';
})

callBtn.addEventListener('click',()=>{
  setTimeout(call,2000);
})








//챗봇만들기
const body = document.getElementById('body');
const chat = document.querySelector('.box-1');
const chatInput = document.querySelector('.chat_input');
const chatBtn = document.querySelector('.chat_btn');
var question = '';
var answer = '';
var key = 0;

var json = 
[
  {
    'question' : '안녕',
    'answer' : 'ㅎㅇ!'
  },
  {
    'question' : '나이',
    'answer' : '비밀~'
  },
  {
    'question' : '이름',
    'answer' : '스펀지밥!'
  }
]

chatBtn.addEventListener('click',()=>{ 
    value = chatInput.value;

    if(key == 1){
      if(value == 'Yes'){
        chat.innerHTML = '대답을 입력해주셈!'
        key = 2;
      }else{
        chat.innerText = '?!'
        key = 0;
      }
      return;
    }if(key == 2){
      answer = value;
      push_json()
      return;
    }

  for(let i = 0; i < json.length; i++){
    if(value === json[i].question){
      chat.innerText = json[i].answer;
      return;
    }
  }

  chat.innerText = value+'??? 대답 가르쳐 주셈!(Yes or No)'
  question = value;
  key = 1;

 })

 function push_json(){
   json.push( { question : `${question}`, answer : `${answer}` } );
   console.log(json)
   chat.innerHTML = '습득완료'
   key = 0;
 }
 



//불끄고 켜기, 말따라하기
// let light =0;
// let follow = 0;

// chatBtn.addEventListener('click',()=>{
//   chatInput.focus();
//   let monkey = chatInput.value;
//   if(monkey === '불꺼줘'){
//     if(light==0){
//       chat.innerText = '불꺼줘 뀨ㅋ?';
//       light++;
//       follow = 0;
//     }else if(light >= 1){
//       chat.innerText = 'ㅇㅋㅇㅋ꺼드림 뀨ㅋ';
//       body.style.cssText  = 'color: white; background-color: black';
//     }
//   }else if(monkey === '불켜줘'){
//     chat.innerText = '켜드림 뀨ㅋ'
//     body.style = '';
//   }

//   if(monkey == '따라해봐'){
//     follow = 0;
//     if(follow == 0){
//       follow++;
//       console.log(follow)
//       chat.innerText = '쌉가능 뀨ㅋ'
//     }
//     }else if(follow >= 1){
//       console.log(follow)
//       console.log(monkey)
//       chat.innerText = monkey + '뀨ㅋ'; 
//       if(monkey == '그만해 뀨ㅋ'){
//         chat.innerText = '뀨ㅋ'
//         follow = 0;
//       }
//   }
// })


