// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/-GEVHlOjR/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

function classifyVideo(img)
{
  classifier.classify(img, gotResult);
  function gotResult(error, results) {
   
    if (error) {
      console.error(error);
    }
    console.log(results);
    //開始改
   
  }
  
}


// Load the model first
function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
    createCanvas(320, 260);
    // Create the video
    video = createCapture(VIDEO);
    video.size(320, 260);
    video.hide();

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    
}

function draw() {
    background(0);
    classifyVideo(video);
    image(video, 0, 0);
    
}