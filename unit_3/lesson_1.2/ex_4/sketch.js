var y=60//y location of the row

function setup() {
  createCanvas(600, 120);
}
function draw() {
  background(220);

  //for(initialize;condition;increment)
  for(x=0;x<=width/2;x=x+50){//change the initialized value, the condition, or the increment

  fill(255,0,0);//add a red fill
	ellipse(x,y,40,40); //draw an ellipse at the x-location of the variable x and y2
  fill(0,255,0);//add a green fill
  ellipse(x,y,30,30);
  fill(0,0,255);//add a blue fill
  ellipse(x,y,20,20)
  fill(255,0,255);//add a purple fill
  ellipse(x,y,10,10)
	}
}
