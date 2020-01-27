/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


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
  
  //amajor
  if ((E == 1) && (A == 1) && (C_ == 1)){
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Famajor.wav?v=1580127638637'
      }
  //bmajor
  // else if ((E == 1) && (A == 1) && (C_ == 1)){
  //     audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Famajor.wav?v=1580127638637'
  //     }
  //cmajor
  else if ((C == 1) && (E == 1) && (Ca == 1)){
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Fcmajor.wav?v=1580127634437'
      }
  //dmajor
  else if ((f_ == 1) && (D == 1) && (A == 1)){
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Fdmajor.wav?v=1580127634501'
      }
  //emajor
  else if ((G_ == 1) && (E == 1) && (B_ == 1)){
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Femajor.wav?v=1580127634332'
      }
  //fmajor
  else if ((f == 1) && (C == 1) && (A == 1) && (Fd == 1)){
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Ffmajor.wav?v=1580127634627'
      }
  //gmajor
  else if ((B == 1) && (G == 1) && (g == 1)){
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Fgmajor.wav?v=1580127634513'
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

