var box;
var box1;
var box2;
var box3;
function setup() {
  createCanvas(400,400);
  box = createSprite(100,100,100,100)
  box1 = createSprite(100,300,100,100)
  box2 = createSprite(300,100,100,100)
  box3 = createSprite(300,300,100,100)
  box.shapeColor = "red"
  box1.shapeColor = "blue"
  box2.shapeColor = "pink"
  box3.shapeColor = "green"
}

function draw() 
{
  background(30);
  drawSprites();
}




