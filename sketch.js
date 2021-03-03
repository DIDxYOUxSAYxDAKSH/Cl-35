var dog,happyDog,database,foodS,foodStock;
function preload()
{
	img1 = loadImage("images/dogImg.png");
  img2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,350);
  dog.addImage(img1);
  dog.scale = 0.2;
  
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
  

}


function draw() {  
  background(46,139,87);

  drawSprites();
  
  if(foodS!=undefined){
  if(keyWentDown(UP_ARROW)){
    writeStock();
    dog.addImage(img2);
  }

  stroke(5);
  textSize(32);
  text("Food left: " + foodS,150,250)}
  textSize(20);
  text("Note: Press up arrow key to feed Voldemort",55,100)

}

function readStock(data){
  foodS = data.val();}

function writeStock(){
  if(foodS>0){
  database.ref('/').update({
    Food : foodS - 1
  })}else{
    database.ref('/').update({
      Food : foodS - 0
  })}
}   
