let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const colorStor=['#FFF', '#0FF', '#F0f'];
let randomX,randomY,color;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
console.log(getRandomInt(3));


function drowDot(x,y,color){
    ctx.beginPath();
    ctx.arc(x,y,1,0,Math.PI*2,true);
    //ctx.fillRect(200, 200, 40,40);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

let dx,dy;
let x1=getRandomInt(canvas.width);
let y1=getRandomInt(canvas.height);

color=colorStor[getRandomInt(3)];
drowDot(x1,y1,color);
console.log(x1,y1,color);
dx=1;
for(let j=0;j<100;j++){
dx++;
dy=1*Math.sqrt(  Math.abs(1-((dx*dx))/1) );
x1+=dx; y1+=dy;
//drowDot(x1,y1,color);
console.log(x1,y1,color);
}
console.log(x1,y1,color);

let time=setInterval(()=>{
    randomX=getRandomInt(canvas.width);
    randomY=getRandomInt(canvas.height);
    color=colorStor[getRandomInt(3)];
    drowDot(randomX,randomY,color);
    x1=randomX; y1=randomY;dx=1;
    let time1=setInterval(()=>{
        //let x1,y1,dx,dy;
        //x1=randomX; y1=randomY;
        x1+=dx;
        dy=1*Math.sqrt(  Math.abs(1-((x1*x1))/1) );
         y1+=dy;
        drowDot(x1,y1,color);
        dx++;
        //time(500);
    },100);

}, 200);



