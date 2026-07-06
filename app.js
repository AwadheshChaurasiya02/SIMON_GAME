let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let btns=["red","yellow","purple","green"]

let h2=document.querySelector("h2")
document.addEventListener("keypress",function(){
   if(started==false){
    started=true;
    levelup();
   }
   
});



function btnflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash");
   },250);
}

function userflash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
      btn.classList.remove("userflash");
   },250);
}

function levelup(){
   userSeq=[];
   level++;
   h2.innerText=`level ${level}`;
   
   let randIdx=Math.floor(Math.random()*4);
   let randColor=btns[randIdx];
   let randBtn=document.querySelector(`#${randColor}`);
   gameSeq.push(randColor);
   btnflash(randBtn);
}



function btnPress(){
   let btn=this;
   userflash(btn);
   let userColor=btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(let btn of allBtn){
   btn.addEventListener("click",btnPress);
}




function checkAns(idx){
   // console.log(`curr level is ${level}`);
   if(userSeq[idx]==gameSeq[idx]){
      if(userSeq.length==gameSeq.length){
         setTimeout(levelup,1000);
      }
   }else{
      h2.innerHTML=`Game Over! your score was <b>${level}</b>  press any key to start again`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
      },150);
      reset();
   }
}


function reset(){
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
}