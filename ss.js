    var w=window.innerWidth;
    var h=window.innerHeight;
    var hit=false;
    var jumper=new jumper();
    var barrier=new barrier();
      function setup(){
        createCanvas(w,h);
      }
      function draw(){
        background(255);
        jumper.show();
        jumper.update();
        jumper.move();
        barrier.show();
        barrier.grav();
        hit=collideRectCircle(barrier.x,barrier.y,50,barrier.wall,jumper.x,jumper.y,50);
        print(hit);
      }
      function jumper(){
        this.x=50;
        this.y=0;
        this.gravity= 0.5;
        this.lift= -10;
        this.velocity= 0;
        this.show=function(){
          fill(255,0,0);
          ellipse(this.x,this.y,50,50);
        }
        this.up=function(){
          this.velocity+=this.lift;
        }
        this.move=function(){
        if((keyIsDown(68))&&(jumper.x<w)){
          jumper.x+=10;
        }
        if((keyIsDown(65))&&(jumper.x>0)){
          jumper.x-=10;
        }
        }
        this.update=function(){
          this.velocity+=this.gravity;//gravity applied when ot jumping
          this.y+=this.velocity;
          this.velocity*0.8;//air res
          if(this.y>h){//jumper hits the floor
            this.y=h;
            this.velocity=0;
          }
        }
      }
      function barrier(){
        this.x=w+100;
        this.y=100;
        this.gravity=10;
        this.wall=Math.floor(Math.random()*h-50);
        this.show=function(){
          fill(255);
          rect(this.x,this.y,100,this.wall);
        }
        this.grav=function(){
          this.x-=this.gravity;
          if(this.x<-100){
            this.x=w+100;
            this.wall=Math.floor(Math.random()*h-100);
          }
        }
      }
      function keyPressed(){
        if((keyCode===32)&&(jumper.y>50)){
          jumper.up();
        }
      }