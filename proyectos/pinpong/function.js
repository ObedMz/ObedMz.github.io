var bar;
var bar2;
var bola;
var scal = 15;
function setup(){
createCanvas(1200,600);
// text


// text
bar = new bar();
bar.setup(scal, 0);
bar2 = new robot();
bar2.setup(width - scal*2, 0);
bola = new bola();
frameRate(30);
textSize(50);
textAlign(CENTER, CENTER);
}


function draw(){
	background(51);
	bar.update();
	bar.show();
	bar2.update();
	bar2.show();
	bola.update();
	bola.show();
	fill(2555);
    text(bola.score, 500, 40);
    text(bola.score2, width-500, 40);
	
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		if(bar.y != 0){
			bar.dir(0,-1.5);	
		}

	} else if(keyCode === DOWN_ARROW){
		if(bar.y != height-150){
			bar.dir(0,1.5);
		}
		
		
	}
}