    var w=window.innerWidth;
    var h=window.innerHeight;
    var hit=false;
    var jumper=new jumper();
    var barrier=new barrier();
    var ground=new ground();
    var score=0;
      function setup(){
        createCanvas(w,h);
        bg=loadImage("pp4.jpg");
        cactus=loadImage("cactus.png");
        fox=loadImage("fox.png");
        flipfox=loadImage("flipfox.png");
        sand=loadImage("sand.jpg");
      }
      function draw(){
        background(bg);
        ground.show();
        jumper.show();
        jumper.update();
        jumper.move();
        jumper.death();
        barrier.show();
        barrier.grav();
        hit=collideRectRect(barrier.x,barrier.y,barrier.widthfinal,50,jumper.x,jumper.y,50,50);
        //hitGround=collideRectRect(jumper.x,jumper.y,50,50,ground.x,ground.y,w,50);
        print(hit);
        if(hit===true){
          location.href="ssdeathscreen.html";
        }
        //print(hitGround);
        score+=1;
        document.getElementById("score").innerHTML=score;
      }
      function jumper(){
        this.x=50;
        this.y=h-100;
        this.gravity= 0.5;
        this.lift= -10;
        this.velocity= 0;
        this.show=function(){
          image(fox,this.x,this.y,50,50);
          noFill();
          strokeWeight(0);
          rect(this.x,this.y,50,50);
        }
        this.up=function(){
          this.velocity+=this.lift;
        }
        this.move=function(){
        if((keyIsDown(68))&&(jumper.x<w-50)){
          jumper.x+=10;
        }
        if((keyIsDown(65))&&(jumper.x>0)){
          jumper.x-=10;
        }
        }
        this.update=function(){
          this.velocity+=this.gravity;//gravity applied when not jumping
          this.y+=this.velocity;
          this.velocity*0.8;//air res
          if(this.y>h-100){//jumper hits the floor //hitGround=true
            this.y=h-100;
            this.velocity=0;
          }
        }
      }
      function barrier(){
        this.x=w+100;
        this.y=h-100;
        this.gravity=10;
        this.wall=Math.floor(Math.random()*4);
        this.widthfinal=Math.floor(this.wall*50);
        this.show=function(){
          image(cactus,this.x,this.y,this.widthfinal,50);
          noFill();
          strokeWeight(0);
          rect(this.x,this.y,this.widthfinal,50);
        }
        this.grav=function(){
          this.x-=this.gravity;
          if(this.x<-100){
            this.x=w+100;
            this.widthfinal=Math.floor(Math.random()*4)*50;
          }
        }
      }
      function ground(){
        this.x=0;
        this.y=h-50;
        this.show=function(){
          image(sand,this.x,this.y,w,50);
          noFill();
          strokeWeight(0);
          rect(this.x,this.y,w,50);
        }
      }
      function keyPressed(){
        if((keyCode===32)&&(jumper.velocity===0)){
          jumper.up();
        }
      }