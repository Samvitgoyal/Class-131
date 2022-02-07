var img="";


function setup(){
canvas=createCanvas(600,400);
canvas.center();

}

function preload(){
img=loadImage("dog_cat.jpg");

}

function draw(){
image(img,0,0,600,400);
fill("#26f70f");
text("Dog",140,80);
noFill();
stroke("#0f0ff7");
rect(125,65,200,300);

}