const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var division = [];
var divisionHeight = 300;
var plinko = [];
var particle = [];

function setup() {
  var canvas = createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height-10, 1500, 20);
  ground1 = new Ground(width, height / 2, 15, 1500);
  ground2 = new Ground(0, height / 2, 15, 1500);

  for (var d = 0; d <= width; d = d + 80) {
    division.push(new Division(d, height - divisionHeight / 2, 10, divisionHeight));
  }
  
  for (var p = 40; p <= width; p = p + 50) {
    plinko.push(new Pars(p, 75, 10));
   }

  for (var r = 15; r <= width - 10; r = r + 50) {
    plinko.push(new Pars(r, 175, 10));
  }

  for (var p = 40; p <= width; p = p + 50) {
    plinko.push(new Pars(p, 275, 10));
  }

  for (var r = 15; r <= width - 10; r = r + 50) {
    plinko.push(new Pars(r, 375, 10));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  strokeWeight(4);


  if (frameCount % 10 === 0) {
    particle.push(new Particle(random((width / 2 - 10), (width / 2 + 10)), 10, 10));
  }
    for (var j = 0; j < particle.length; j++) {
    particle[j].display();
  }
  for (var k = 0; k < division.length; k++) {
    division[k].display();
  }
  for (var w = 0; w < plinko.length; w++) {
    plinko[w].display();
  }


  ground.display();
  ground1.display();
  ground2.display();
  


  drawSprites();
}