img="";
Status="";
objects=[];
function setup(){
canvas=createCanvas(380,380);
video=createCapture(VIDEO);
video.hide();
canvas.center();

}
function preload(){
img=loadImage("dog_cat.jpg");
ObjectDetector=ml5.objectDetector("cocssd",modelLoaded);
}

function draw(){
image(video,0,0,380,380);

if(Status !=""){
    r=random(255);
    g=random(255);
    b=random(255);
    ObjectDetector.detect(video,gotResults);
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Status :Object Detected";
document.getElementById("number_of_objects").innerHTML="Number of objects that are detected are: "+objects.length;
fill(r,g,b);
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y)
noFill();
stroke(r,g,b);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

}


}
}

function modelLoaded(){
console.log("Model loaded!");
Status=true;

}
function gotResults(error,results){
if(error){

    console.log(error);
}
console.log(results)
objects=results;

}

