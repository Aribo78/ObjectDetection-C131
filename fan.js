Status = "";
fan_image = "";

function preload(){
   fan_image = loadImage("fan.jpg")
}
function setup(){
canvas = createCanvas(600, 500)
canvas.position(465,250)
object_detector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects"; 
}
function modelLoaded()
{
   console.log("Model Loaded!")
   Status = true;
   object_detector.detect(fan_image, gotResults);
}
function gotResults(results, error)
{ 
   if (error){
      console.log(error);
   }
   console.log(results);
}
function draw(){
    image(fan_image,0,0,600,500);
}