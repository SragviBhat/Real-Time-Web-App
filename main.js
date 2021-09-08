function setup(){
canvas = createCanvas(300, 300);
cam = createCapture(VIDEO);
canvas.center();
cam.hide();
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RS58IzcW2/model.json', modelLoaded);
}

function draw(){
image(cam, 0, 0, 300, 300);
classifier.classify(cam, gotResult);
}

function modelLoaded(){
console.log("Model Is Loaded");
}

function gotResult(error, results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("object"). innerHTML = results[0].label;
document.getElementById("accuracy"). innerHTML = results[0].confidence.toFixed(3);
}
}
