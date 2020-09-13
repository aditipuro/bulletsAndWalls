var bullet, wall;
var speed, weight;
var damage;
var carColor;
var thickness=random(22,83);

 function setup() {

  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(50, 250, 40, 15);
  wall = createSprite(1200, 280, thickness, height/2);
  wall.shapeColor = color(0, 0, 0);
  bullet.shapeColor = color(255, 255, 255);
  bullet.velocityX = speed;

  

}

function draw() {
  background(255, 0, 255);
  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2) {

    bullet.velocityX = 0;  
  damage = 0.5*bullet.weight*bullet.speed*bullet.speed/wall.thickness * wall.thickness * wall.thickness;

  if(damage<10){
    bullet.shapeColor = color(0, 255, 0);
  }
  
  if(damage>10) {
    bullet.shapeColor = color(255, 0, 0);
  }
}
  drawSprites();
}