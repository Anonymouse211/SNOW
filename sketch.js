const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var backgroundImg, snow1, snow2, snow3, snow4, snow5, snow6, snow7;
var engine, world, bodies;

function preload() {
  backgroundImg = loadImage("snow3.jpg")

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  //createSprite(400, 200, 50, 50);
  snow1 = new Snow(100,100,100,100);
  snow2 = new Snow(200,100,100,100);
  snow3 = new Snow(300,100,100,100);
  snow4 = new Snow(400,100,100,100);
  snow5 = new Snow(500,100,100,100);
  snow6 = new Snow(600,100,100,100);
  snow7 = new Snow(700,100,100,100);
  

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  snow1.display();  
  snow2.display();  
  snow3.display();  
  snow4.display();  
  snow5.display();  
  snow6.display();  
  snow7.display();  
  drawSprites();  
}