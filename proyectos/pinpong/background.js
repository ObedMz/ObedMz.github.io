function menu(){
	this.computer = false;
	this.human = false;
	this.start = false;
	this.x = 0;
	this.y = 0;
	this.update = function(){		
		this.x = this.x;
		this.y = this.y ;

		this.x = constrain(this.x, 0, width-scal);
		this.y = constrain(this.y, 0, height-scal);
	} 
	

	this.show = function(){
		fill(51);
		rect(this.x,this.y,1200, 600);
	}
	this.remove = function(){
	rect(this.x,this.y,0, 0);

	}

	
}