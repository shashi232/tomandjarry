var tom , tomImg1,tomImg2,tomImg3,tomImg4;
var jarry,jarryImg1,jarryImg2,jarryImg3,jarryImg4;
var gardan,gardanImg;



function preload() {
    //load the images here
    tomImg1 = loadImage("images/cat1.png");
    tomImg2 = loadImage("images/cat2.png");
    tomImg3 = loadImage("images/cat3.png");
    tomImg4 = loadImage("images/cat4.png");

    jarryImg1 = loadImage("images/mouse1.png");
    jarryImg2 = loadImage("images/mouse2.png");
    jarryImg3 = loadImage("images/mouse3.png");
    jarryImg4 = loadImage("images/mouse4.png");

    gardanImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(600,600);

    gardan = createSprite(300,300);
    gardan.addImage(gardanImg);
    gardan.scale = 1;
    

    tom = createSprite(400,500);
    tom.addImage(tomImg1);
    tom.scale =0.1;

    jarry  = createSprite(200,350);
    jarry.addImage(jarryImg4);
    jarry.scale = 0.1;

   

}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
    jarry.x = mouseX ;
    jarry.y = mouseY; 
  
  if(isTouching(tom,jarry)){
    tom.addImage(tomImg2);
    jarry.addImage(jarryImg2)
  }
  else{
    tom.addImage(tomImg3);
    jarry.addImage(jarryImg3);
  }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
