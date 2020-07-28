var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var score=0
 var count=0
 var turn=0
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var gameState="start"
var particle1;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     text("100,200,30")
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(35)
  fill("white")
  text("score" +score,width-300,50)
  text("200",10,550)
  text("200",95,550)
  text("200",178,550)
  text("200",250,550)
  text("1000",325,550)
  text("1000",485,550)
  text("1000",400,550)
  text("100",580,550)
  text("100",650,550)
  text("100",740,550)
  
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    // score++;
  // }
 
 // for (var j = 0; j < particles.length; j++) {
   
     //particles[j].display();
 //  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (particle1!=null) {
    particle1.display();
    pos = particle1.body.position;
    if (pos.y > 760) {
      if (pos.x < 100 || pos.x > 640) {
       score = score + 100;
       particle1 = null;
      }
      if (pos.x > 100 && pos.x < 320 ) {
       score = score + 200;
       particle1 = null;
      }

      if (pos.x > 480 && pos.x < 640) {
         score = score + 200;
         particle1 = null;
      }
      if (pos.x > 320 && pos.x < 480) {
       score = score + 1000;
       particle1 = null;
      }
    
    
  }
 }

 if (turn == 5) {
   gameState = 'end';
   textSize(50);
   text("GAME OVER",250,250);
 }
}

function mousePressed(){

  if ( gameState !== 'end' ) {
    turn++
    particle1 = new Particle(mouseX,10,10,10);
  }
}