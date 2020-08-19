var geekyBoy,GB, nerdyGirl,NG;
var actionGirl,AG, blueshirtBoy ,BSB;
var danceGirl,DG, pinkyGirlPG;
var redhoodieBoy,RHB, thiefBoy,TB;
var coin;
var zombie1;
var forestBG;
var gameState= "start";
var plrChoose=0;

function preload(){
  actionGirl = loadAnimation("Characters/Action_Girl/AG1.png","Characters/Action_Girl/AG2.png","Characters/Action_Girl/AG3.png","Characters/Action_Girl/AG4.png","Characters/Action_Girl/AG5.png","Characters/Action_Girl/AG6.png");
  blueshirtBoy = loadAnimation("Characters/Blue_Shirt_Boy/BSB1.png","Characters/Blue_Shirt_Boy/BSB2.png","Characters/Blue_Shirt_Boy/BSB3.png","Characters/Blue_Shirt_Boy/BSB4.png","Characters/Blue_Shirt_Boy/BSB5.png","Characters/Blue_Shirt_Boy/BSB6.png");
  geekyBoya = loadAnimation("Characters/Geeky_Boy/GB1.png","Characters/Geeky_Boy/GB2.png","Characters/Geeky_Boy/GB3.png","Characters/Geeky_Boy/GB4.png","Characters/Geeky_Boy/GB5.png","Characters/Geeky_Boy/GB6.png");
  nerdyGirl = loadAnimation("Characters/Nerdy_Girl/NG1.png","Characters/Nerdy_Girl/NG2.png","Characters/Nerdy_Girl/NG3.png","Characters/Nerdy_Girl/NG4.png","Characters/Nerdy_Girl/NG5.png","Characters/Nerdy_Girl/NG6.png");
  pinkyGirl = loadAnimation("Characters/Pinky_Girl/PG1.png","Characters/Pinky_Girl/PG2.png","Characters/Pinky_Girl/PG3.png","Characters/Pinky_Girl/PG4.png","Characters/Pinky_Girl/PG5.png","Characters/Pinky_Girl/PG6.png");
  redhoodieBoy = loadAnimation("Characters/Red_Hoodie_Boy/RHB1.png","Characters/Red_Hoodie_Boy/RHB2.png","Characters/Red_Hoodie_Boy/RHB3.png","Characters/Red_Hoodie_Boy/RHB4.png","Characters/Red_Hoodie_Boy/RHB5.png","Characters/Red_Hoodie_Boy/RHB6.png");
  thiefBoy = loadAnimation("Characters/Thief_Boy/TB1.png","Characters/Thief_Boy/TB2.png","Characters/Thief_Boy/TB3.png","Characters/Thief_Boy/TB4.png","Characters/Thief_Boy/TB5.png","Characters/Thief_Boy/TB6.png");
  danceGirl = loadAnimation("Characters/Dance_Girl/DG1.png","Characters/Dance_Girl/DG2.png","Characters/Dance_Girl/DG3.png","Characters/Dance_Girl/DG4.png","Characters/Dance_Girl/DG5.png","Characters/Dance_Girl/DG6.png");
  coin = loadImage("Characters/Things/Coin.png");
  zombie1 = loadAnimation("Characters/Zombie1/Zombie1.png","Characters/Zombie1/Zombie2.png","Characters/Zombie1/Zombie3.png","Characters/Zombie1/Zombie4.png","Characters/Zombie1/Zombie5.png","Characters/Zombie1/Zombie6.png",)
  forestBG= loadImage("Characters/Back_Ground/forestBG.jpg");
  GB= loadImage("Characters/Geeky_Boy/GB1.png");
  NG= loadImage("Characters/Nerdy_Girl/NG1.png");
  AG= loadImage("Characters/Action_Girl/AG1.png");
  BSB= loadImage("Characters/Blue_Shirt_Boy/BSB1.png");
  DG= loadImage("Characters/Dance_Girl/DG1.png");
  PG=loadImage("Characters/Pinky_Girl/PG1.png");
  RHB=loadImage("Characters/Red_Hoodie_Boy/RHB1.png")
  TB=loadImage("Characters/Thief_Boy/TB1.png")

  //cityBG= loadImage("Characters/Back_Ground/CityBG.png")
  //nightCityBG= loadImage("Characters/Back_Ground/nightCityBG.jpg")
}

function setup() {
  createCanvas(1000,500);
  //createSprite(400, 200, 50, 50);
  startButton = createButton("START");
  startButton.hide();
  danceGirl=createSprite(200,400,20,20)
    danceGirl.addImage(DG);
    danceGirl.visible=false;
    geekyBoy=createSprite(200,200,20,20)
    geekyBoy.addImage(GB);
    geekyBoy.visible=false;
    nerdyGirl=createSprite(350,200,20,20)
    nerdyGirl.addImage(NG);
    nerdyGirl.visible=false;
    blueshirtBoy=createSprite(500,200,20,20)
    blueshirtBoy.addImage(BSB);
    blueshirtBoy.scale=0.8;
    blueshirtBoy.visible=false;
   actionGirl=createSprite(790,200,20,20)
    actionGirl.addImage(AG);
    actionGirl.visible=false;
     pinkyGirl=createSprite(350,400,20,20)
    pinkyGirl.addImage(PG);
    pinkyGirl.scale=0.8;
    pinkyGirl.visible=false;
    redhoodieBoy=createSprite(500,400,20,20)
    redhoodieBoy.addImage(RHB);
    redhoodieBoy.scale=0.8;
    redhoodieBoy.visible=false;
    thiefBoy=createSprite(650,400,20,20)
    thiefBoy.addImage(TB);
   thiefBoy.scale=0.8;
   thiefBoy.visible=false;
}

function draw() {
  background("black");
  if (gameState==="start"){
    textSize(20);
    fill("purple")
    textFont("showcard gothic");
  text("MIRACULOUS RUN",400,70);
  textSize(15);
  fill("white");
  textFont("Comic sans ms")
    text("There is a peaceful town. Recently, there was a new kind of disease which is caused by eating a kid of mushroom.  ",100, 200)
    text("When people eat the mushroom, they become zombies. There were a few cute kids studying in the nearby school.",100,220);
    text("They are a team of 8 kids. They like adventures and like to get involved in them. They also have some super powers.", 100, 240)
    text("They go to fight with they zombies. But, unfortunately the zombies started chasing them and the kids are in danger. ",100,260);
    text("So, they run to save their lives.",100,280)
   startButton.show();
  startButton.position(900,400);
  startButton.mousePressed(start);
  }  
  if (gameState==="choosePlayer"){
    startButton.hide();
    if(plrChoose===0){
      background("black")
    }
    textSize(20);
    textFont("showcard gothic")
    fill("pink")
    text("CLICK ON THE CHARACTER THAT YOU CHOOSE TO PLAY WITH",200,90)

   /* var nerdyGirl=createSprite(350,200,20,20)
   nerdyGirl.addImage(NG);
var geekyBoy=createSprite(200,200,20,20)
    geekyBoy.addImage(GB);
   if(mousePressedOver(geekyBoy)){
     nerdyGirl.visible=false;
   }*/
   
    geekyBoy.visible=true;
    geekyBoy.debug=true;
   if(mousePressedOver(geekyBoy)){
      plrChoose=1;
      gameState="play";
      console.log(plrChoose)
     
      
    }
    nerdyGirl.visible=true;
    nerdyGirl.debug=true;
    if(mousePressedOver(nerdyGirl)){
      plrChoose=2;
      gameState="play";
      console.log(plrChoose)
     
    }
    blueshirtBoy.visible=true;
    blueshirtBoy.debug=true;
    if(mousePressedOver(blueshirtBoy)){
      plrChoose=3;
      gameState="play";
      console.log(plrChoose)
    }
    actionGirl.visible=true;
    actionGirl.debug=true;
    actionGirl.setCollider("rectangle",-150,0,100,150)
    if(mousePressedOver(actionGirl)){
      plrChoose=4;
      gameState="play";
      console.log(plrChoose)
  
    }
    danceGirl.visible=true;
    danceGirl.scale=0.8;
    danceGirl.debug=true;
    if(mousePressedOver(danceGirl)){
      plrChoose=5;
      gameState="play";
      console.log(plrChoose)
  
    }
    pinkyGirl.visible=true;
    pinkyGirl.debug=true;
    if(mousePressedOver(pinkyGirl)){
      plrChoose=6;
      gameState="play";
      console.log(plrChoose)
   
    }
    redhoodieBoy.visible=true;
    redhoodieBoy.debug=true;
    if(mousePressedOver(redhoodieBoy)){
      plrChoose=7;
      gameState="play";
      console.log(plrChoose)
    
    }
   thiefBoy.visible=true;
   thiefBoy.debug=true;
   if(mousePressedOver(thiefBoy)){
    plrChoose=8;
    gameState="play";
    console.log(plrChoose)
    
  }
  }
  if(gameState==="play"){
    clear();
   nerdyGirl.visible=false;
      danceGirl.visible=false;
      blueshirtBoy.visible=false;
      pinkyGirl.visible=false;
      redhoodieBoy.visible=false;
      thiefBoy.visible=false;
      actionGirl.visible=false;
      geekyBoy.visible=false;
      background(forestBG);
    if(plrChoose===1){
      
      var player=createSprite(100,250,20,20);
      player.addAnimation("player1",geekyBoya)
      player.velocityx=5;
      console.log(player.x);
    }
    else if(plrChoose===2){
      background(forestBG)
    }
    else if(plrChoose===3){
      background(forestBG)
    }
    else if(plrChoose===4){
      background(forestBG)
    }
    else if(plrChoose===5){
      background(forestBG)
    }
    else if(plrChoose===6){
      background(forestBG)
    }
    else if(plrChoose===7){
      background(forestBG)
    }
    else if(plrChoose===8){
      background(forestBG)
    }
    else{
      background("purple");
  }

}
  drawSprites();
}
function start(){
  gameState="choosePlayer"
  console.log("buttonPressed")
}