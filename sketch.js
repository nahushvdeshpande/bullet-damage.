var wall,thickness;
var bullet,speed,weight;

function setup(){
    createCanvas(600,600);
    
    thickness=random(22,83);
    speed=random(223,321);
    weight=random(30,52);
    wall=createSprite(1200,200,thickness,height/2);
}

function draw(){

    if(hasCollided(bullet,wall)){
        bullet.velocityX=0;
        var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
     if(damage>10){
        wall.shapeColor=color(255,0,0);
     }
     if(damage<10)
     {
      wall.shapeColor=color(0,255,0);
     }
    }   
}

function hasCollided(bullet,wall){
    bulletRightEdge=bullet.pos.x+bullet.width;
    wallLeftEdge=wall.pos.x;
    if(bulletRightEdge>=wallLeftEdge){
    return true;
    }
    return false;
}