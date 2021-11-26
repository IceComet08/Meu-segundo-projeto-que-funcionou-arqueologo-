const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var borrachinha;
var pedregulho;
var ferrado;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ferrado = new ferro(200,100,40,60);
    pedregulho = new pedra(1000,100,120,60)
    borrachinha = new Rubber(600,100,100);
    


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    ferrado.display();
    borrachinha.display();
    pedregulho.display();
    plane.display();
    hammer.display();

    
 
}