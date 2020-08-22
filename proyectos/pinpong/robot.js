function robot(){
	this.x = 0;
	this.y = 0;
	this.xspeed = 0;
	this.yspeed = 1;
	
	this.dir = function(x,y){
		this.xspeed = x;
		this.yspeed = y;
	}
	this.setup = function(x, y){
		this.x = x;
		this.y = y;
	}

	this.update = function(){

		this.y = bola.y;

		this.y = constrain(this.y, 0, height-150);
		if(this.y == height-150){
			this.dir(0,-2);
		}else if(this.y == 0){
			this.dir(0,2);
		}
	/*	if(this.y - 150 >= bola.y){
			this.dir(0,2);
		} */

	} 

	this.show = function(){
		fill(2555);
		rect(this.x, this.y,scal,150);
	}

	
}