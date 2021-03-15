var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(223,320);
  weight = random(30,50);
  thickness = random(22,83);

  bullet = createSprite(50, height/2, 40, 20);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;

    var damage = (0.5* weight * speed * speed)/ (thickness*thickness*thickness);

    console.log(damage)

    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
    else{
      wall.shapeColor = color(255,0,0);
    }
  }


  drawSprites();
}

function hasCollided(iBullet,iWall){
 var bulletRightEdge = iBullet.x + (iBullet.width/2);
 var wallLeftEdge = iWall.x - (iWall.width/2);

 if(bulletRightEdge>=wallLeftEdge){
   return true;
 }
 else{
   return false;
 }

}