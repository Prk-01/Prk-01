//function for generating random unique numbers of given size
const randomNumberArray=(n)=>{
    let ran=new Array;
  for(i=0;ran.length<n;i++)
  {  x=Math.floor(Math.random()*n)
      if(!ran.includes(x))
      ran.push(x)
  }
    return ran;
}
//function to add states
const state=(game)=>{
  plane.style.pointerEvents="auto";
  clearInterval(game)
}
//function for status update
const status=(condition,color,imgurl)=>{
  board.innerHTML="<h1>YOU "+condition+"</h1><br><a href='./colorGame.html'>PlayAgain</a><br><img src="+imgurl+"><br>"
  document.body.style.background=color
  if(condition==="WIN")
  {
    const winAudio=new Audio('youWin.mp3')
    winAudio.play();
  }
  else {
    const loseAudio=new Audio('youLose.mp3')
    loseAudio.play();
  }
}

//variable declaration

const button=document.querySelector("button")
const board=document.querySelector("div")
const gtype=document.querySelector("select")
const plane=document.querySelector("table")
const brand=document.querySelector("#brand")
const rowTwo=document.querySelector(".two")
const rowThree=document.querySelector(".three")
let pat=new Array;
let ph=0;
const win="https://images.bewakoof.com/t540/dabbing-panda-half-sleeve-t-shirt-men-s-printed-t-shirts-1514635250.jpg"
const lose="https://www.pngitem.com/pimgs/m/170-1708423_cartoon-face-angry-panda-hd-png-download.png"

//start as medium mode of Game
let box=document.querySelectorAll(".hard td")

//change of modes
gtype.addEventListener('change',()=>{
  if(gtype.value==='1')
  {
      rowTwo.style.visibility="hidden";
      rowThree.style.visibility="hidden";
      box=document.querySelectorAll(".easy td")
    }
    else if(gtype.value==='2')
    {
      rowTwo.style.visibility="visible"
      rowThree.style.visibility="hidden"
      box=document.querySelectorAll(".medium td")
    }
    else{
      rowTwo.style.visibility="visible"
      rowThree.style.visibility="visible"
      box=document.querySelectorAll(".hard td")
    }
})


//To make box unclickable
plane.style.pointerEvents="none";

//Event to start game
button.addEventListener('click',()=>{
  const start=new Audio('start.mp3')
  start.play()
  pat=randomNumberArray(box.length);
   let i=0;
   button.style.visibility="hidden"
   gtype.style.visibility="hidden"
    let game=setInterval(()=>{
          box[r=pat[i]].style.background="red";
          i++;
          ((i<box.length)||state(game))
    },1000)
})

//Event to play game
box.forEach((b) => {
  b.addEventListener('click',()=>{
    b.style.background="green";
    const green=new Audio('green.mp3')
    green.play();
    box[pat[ph]].style.pointerEvents="none"
    if(!(box[pat[ph++]].style.background=="green"))
      {
        status("LOSE","red",lose)
    }
    ((ph<box.length)||status("WIN","green",win))
  })
});


//title coloration
const b=["#eb1726","#d70bde","#310af5","#15cf87","#e3530b"]
let i=0;
setInterval(function(){
 brand.style.color=b[i];
 i=(i+1)%4;
},300)
