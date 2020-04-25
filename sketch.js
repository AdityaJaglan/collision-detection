var movingRect,fixedRect
var gameobject1,gameobject2,gameobject3,gameobject4



function setup() {
  createCanvas(800,400);
 movingRect= createSprite(400, 200, 80, 30);
 fixedRect= createSprite(200,200,50,80);
 movingRect.shapeColor= "green"
 fixedRect.shapeColor="green"
 fixedRect.debug=true;
 movingRect.debug=true;
 gameobject1=createSprite(100,100,50,50);
 gameobject1.shapeColor="green"
 gameobject2=createSprite(200,100,50,50);
 gameobject2.shapeColor="green"
// gameobeject3=createSprite(300,100,50,50);
 //gameobject3.shapeColor="green"
gameobject4=createSprite(400,100,50,50);
gameobject4.shapeColor="green"
}

function draw() {
  background(0,0,0); 

  movingRect.x=World.mouseX ;
  movingRect.y=World.mouseY;
  
 if( isTouching(movingRect,gameobject1)){
  movingRect.shapeColor="blue" 
  gameobject1.shapeColor="blue"
 }
 else{
  movingRect.shapeColor="green"
 gameobject1.shapeColor="green"
 }
  drawSprites();
  
}
  function isTouching(object1,object2){
    //object1=movingRect
    //object2=fixedRect
    if (object1.x-object2.x<object2.width/2+object1.width/2
      && object2.x-object1.x<object2.width/2+object1.width/2
      && object1.y-object2.y<object2.height/2+object1.height/2
      && object2.y-object1.y<object2.height/2+object1.height/2){
     return true
    }
    else{
     return false;
    }




}