// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/-GEVHlOjR/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// Load the model first
function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
    createCanvas(411, 330);
    // Create the video
    video = createCapture(VIDEO);
    video.size(411, 330);
    video.hide();

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
}

function draw() {
    background(0);
    image(flippedVideo, 0, 0);
    /*classifyVideo(video);
    image(video, 0, 0);*/

     // Draw the label
     fill(255);
     textSize(16);
     textAlign(CENTER);
     text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo(img) {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  //classifier.classify(img, gotResult);
  flippedVideo.remove();
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  console.log(results);
  //開始改
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}
