/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

const audio = document.querySelector('#audio')

var video = document.getElementById('video');
var canvas = document.getElementById('motion');
var score = document.getElementById('score');

function initSuccess() {
	DiffCamEngine.start();
}

function initError() {
	alert('Something went wrong.');
}

function getchord() {
  
  if ((E == 1) && (A == 1) && (C_ == 1)){
      audio.src = 'https://raw.githubusercontent.com/scribbletune/sampler/master/samples/korgBass/a1-33.wav';
      alert("src changed");
      }
}

function capture(payload) {
	score.textContent = payload.score;
  if (payload.score > 100) {
    console.log("lift off!!");
    getchord();
    audio.play();
  }
}

DiffCamEngine.init({
	video: video,
	motionCanvas: canvas,
	initSuccessCallback: initSuccess,
	initErrorCallback: initError,
	captureCallback: capture
});

//Audio controls

