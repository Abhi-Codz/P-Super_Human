const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box15;
var hero, monster, rope, ground;

function preload() 
{
  bg = loadImage("images/GamingBackground.png"); 
}

function setup() 
{
  let canvas = createCanvas(3000, 700);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400, 800, 250);
  rope = new String(hero.body, { x: 500, y: 50 });
  
  monster = new Monster(1100,550,300);

  box1 = new Blocks(600, 100, 70, 70);
  box2 = new Blocks(900, 100, 70, 70);
  box3 = new Blocks(900, 100, 70, 70);
  box4 = new Blocks(900, 100, 70, 70);
  box5 = new Blocks(900, 100, 70, 70);
  box6 = new Blocks(900, 100, 70, 70);
  box7 = new Blocks(900, 100, 70, 70);
  box8 = new Blocks(900, 100, 70, 70);
  box9 = new Blocks(600, 100, 70, 70);
  box10 = new Blocks(600, 100, 70, 70);
  box11 = new Blocks(600, 100, 70, 70);
  box12 = new Blocks(600, 100, 70, 70);
  box13 = new Blocks(600, 100, 70, 70);
  box14 = new Blocks(600, 100, 70, 70);
  box15 = new Blocks(600, 100, 70, 70);


}

function mouseDragged() 
{
  Matter.Body.setPosition(hero.body,{x: mouseX ,y:mouseY});

}
function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display()
  box6.display()
  box7.display()
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();


  hero.display();
  rope.display();
  
  monster.display();
}
