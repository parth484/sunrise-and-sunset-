const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time;
var bg = "sunrise1.png";
var bg = "sunrise2.png";
var bg = "sunrise3.png";
var bg = "sunrise4.png";
var bg = "sunrise5.png";
var bg = "sunrise6.png";
var bg = "sunset7.png";
var bg = "sunset8.png";
var bg = "sunset9.png";
var bg = "sunset10.png";
var bg = "sunset11.png";
var bg = "sunset12.png";


function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1500,900);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    
    
    
    // write code to display time in correct format here


}

async function getBackgroundImg(){

    
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
        
        if(hour>=08 && hour<=09){
            bg = "sunrise1.png";
        }
        else if(hour>=09 && hour<=10) {
            bg = "sunrise2.png";
        }
        else if(hour>=10 && hour<=11) {
            bg = "sunrise3.png";
        }
        else if(hour>=11 && hour<=12) {
            bg = "sunrise4.png";
        }
        else if(hour>=12 && hour<=13) {
            bg = "sunrise5.png";
        }
        else if(hour>=13 && hour<=14) {
            bg = "sunrise6.png";
        }
        else if(hour>=14 && hour<=15) {
            bg = "sunset7.png";
        }
        else if(hour>=15 && hour<=16) {
            bg = "sunset8.png";
        }
        else if(hour>=16 && hour<=17) {
            bg = "sunset9.png";
        }
        else if(hour>=17 && hour<=18) {
            bg = "sunset10.png";
        }
        else if(hour>=18 && hour<=19) {
            bg = "sunset11.png";
        }
        else if(hour>=19 && hour<=20) {
            bg = "sunset12.png";
        }
        else  {
            bg = "sunset12.png";
        }
    
        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
    

}
