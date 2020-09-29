var bar;
var bar2;
var bola;
var scal = 15;
var menu;
function setup(){
let canvas = createCanvas(1200, 600);
canvas.id("canvas");


// buttom for computer
button = createButton('1 vs Computer');
button.mousePressed(computer);
button.class("button-computer");

// buttom for human
button2 = createButton('1 vs 1');
button2.mousePressed(human);
button2.class("button-human");


// text
menu = new menu();
menu.update();
bar = new bar();
bar.setup(scal, 0);
bar2 = new robot();
bar2.setup(width - scal*2, 0);
bola = new bola();
frameRate(30);
textSize(50);
textAlign(CENTER, CENTER);
}
function computer() {
menu.start = true;
menu.computer = true;
 // set to fight with the computer
 menu.remove();
 bola.xspeed = 1;
 bola.yspeed = -1.5;
 button.remove();
 button2.remove();
}


function human() {
menu.start = true;
menu.computer = false;
 // set to fight with the computer
 menu.remove();
 bola.xspeed = 1;
 bola.yspeed = -1.5;
 button.remove();
  button2.remove();
}


function draw(){


	if(!menu.computer){

	if(keyIsDown(UP_ARROW)){
 		bar2.y = bar2.y - 25;
	}
	if (keyIsDown(DOWN_ARROW)) {

    	bar2.y = bar2.y + 25;
 	}
	} 

 	 if(keyIsDown(87)){
 	 	bar.y = bar.y - 25;
 		
	}
	if (keyIsDown(83)) {
    	  bar.y = bar.y + 25;
 	 }
	background(51);
	bar.update();
	bar.show();
	bar2.update();
	bar2.show();
	bola.update();
	bola.show();

	menu.update();
	fill(2555);
    text(bola.score, 500, 40);
    text(bola.score2, width-500, 40);
	if(!menu.start){
		bola.dir(0,0);
		menu.show();
		fill(255);
		text("¡Ping Pong!", 600, 80);
	}
	 
}
