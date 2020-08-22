function bar(){
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
	this.y = this.y + this.yspeed*scal;
	this.y = constrain(this.y, 0, height-150);
	} 

	this.show = function(){
		fill(2555);
		rect(this.x, this.y,scal,150);
	}

	
}