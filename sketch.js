//Create variables here
var dog,happyDog,database,foodS,foodStock

function preload()
{
	//load images here
  dog=loadImage("images/dogImg.png")
 happyDog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  
  doggo=createSprite(200,200,50,50)
  doggo.addImage(dog)
  doggo.scale=0.2

  database=firebase.database()
 

foodStock=database.ref('Food')
foodStock.on("value",readStock)
}


function draw() {  
background(46,136,87)
 
  //add styles here
  
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  doggo.addImage(happyDog)
}

  drawSprites();

  text("food remaining :"+foodS,200,150)
  text("Avidans Note : Press UP Arrow key to FEED DOGGO MILK",50,350)
  textSize(30)

}


function readStock(data){
foodS=data.val()

}

function writeStock(x){

  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}

