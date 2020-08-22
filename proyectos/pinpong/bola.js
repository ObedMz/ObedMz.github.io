function bola(){
	this.score = 0;
	this.score2 = 0;
	this.x = 1200/2;
	this.y = 600/2;
	this.xspeed = -1;
	this.yspeed = 1.5;
	
	this.dir = function(x,y){
		//1 
		
			this.xspeed = x;
			this.yspeed = y;
	
	}

	this.update = function(){				   //true      //540  <=  600			
            //15        //15             //20    //0
            
         if(this.y >= bar.y && this.y <= (bar.y + 150)){
         	if(this.x >= scal && this.x <= bar.x + scal){
         		if(this.y == bar.y + 75){
			this.dir(-this.xspeed - this.xspeed, this.yspeed);

         		}else if(this.y > bar.y){
      			this.dir(-this.xspeed, this.yspeed);

         		} else {
         		this.dir(-this.xspeed, - this.yspeed);

         		}
         	}
         }
	if(this.y >= bar2.y && this.y <= (bar2.y + 150)){
		if(this.x >= (bar2.x - scal)){
		if(this.y > bar2.y){
      			this.dir(-this.xspeed, this.yspeed);

         		} else {
         		this.dir(-this.xspeed, - this.yspeed);

         		}
         }
}
		if(this.y == height-scal){
			this.dir(this.xspeed - 0.5, - this.yspeed);
		}else if(this.y == 0){
			this.dir(this.xspeed,- this.yspeed);
	}
		if(this.x >= width-scal){
			this.score = this.score + 1;

			this.x = 1200/2;
			this.y = 600/2;
			this.xspeed = 1;
			this.yspeed = -1.5;
		} else if(this.x == 0){
			this.score2 = this.score2 + 1;
			this.x = 1200/2;
			this.y = 600/2;
			this.xspeed = -1;
			this.yspeed = 1.5;
		}

		this.x = this.x + this.xspeed*scal;
		this.y = this.y + this.yspeed*scal;

		this.x = constrain(this.x, 0, width-scal);
		this.y = constrain(this.y, 0, height-scal);
	} 

	this.show = function(){
		fill(35,127,231);
		rect(this.x, this.y,scal, scal);
	}

	
}