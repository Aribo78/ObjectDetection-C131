Status = "";
fan_image = "";
objects = [];

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
   objects = results;
}
function draw(){
    image(fan_image,0,0,600,500);
    if(Status != "")
    for(i = 0; i < objects.length; i++){
      document.getElementById("Status").innerHTML = "Status: Objects Detected";

      fill(255, 0, 0);
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
          noFill();
          stroke(255, 0, 0);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
   }
}