var video = document.getElementById('video');
var canvas = document.getElementById('motion');
var score = document.getElementById('score');
var audio = document.getElementById('audio');

audio.playbackRate = 3;
 var thresh = 0
 var waiting = false;

function initSuccess() {
	DiffCamEngine.start();
}

function initError() {
	alert('Something went wrong.');
}

function capture(payload) {
	score.textContent = payload.score;
  thresh = payload.score;
  
  getchord(); 
  
//          var blob = new Blob([
//     document.querySelector('#worker1').textContent
//   ], { type: "text/javascript" })

//   // Note: window.webkitURL.createObjectURL() in Chrome 10+.
//   var worker = new Worker(window.URL.createObjectURL(blob));
//   worker.onmessage = function(e) {
//     console.log("Received: " + e.data);
//     waiting = e.data;
//   }
//   worker.postMessage(thresh); // Start the worker.
    
    if (waiting == true){
    
    console.log("we are waiting")
    
    }
  
    if (payload.score < 120){
    
      waiting = false
    
    }
  
    else if (payload.score < 150 && payload.score > 130){
    
      waiting = true

    
    }

  else if (payload.score > 150 && waiting == true){
    
     console.log("did not play")
    }
  
  else if (payload.score >= 150 && waiting == false) {
    
    waiting = true;
    audio.currentTime = 1;
    audio.play()

    console.log("played")
    
  }
  

  
}

// setInterval(function(){ 
// console.log(thresh)
// }, 3);

 

DiffCamEngine.init({
	video: video,
	motionCanvas: canvas,
	initSuccessCallback: initSuccess,
	initErrorCallback: initError,
	captureCallback: capture
});


