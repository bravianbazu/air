           var video = document.getElementById('video');
var canvas = document.getElementById('motion');
var score = document.getElementById('score');
var audio = document.getElementById('audio');

 var thresh = 0
 var waiting = false;

function initSuccess() {
	DiffCamEngine.start();
}

function initError() {
	alert('Something went wrong.');
}

setInterval(function(){ getchord() }, 20);

function capture(payload) {
	score.textContent = payload.score;
  thresh = payload.score;
  
         var blob = new Blob([
    document.querySelector('#worker1').textContent
  ], { type: "text/javascript" })

  // Note: window.webkitURL.createObjectURL() in Chrome 10+.
  var worker = new Worker(window.URL.createObjectURL(blob));
  worker.onmessage = function(e) {
//     console.log("Received: " + e.data);
    waiting = e.data;
  }
  worker.postMessage(thresh); // Start the worker.
    

  if (payload.score > 200 && waiting == true){
    
    console.log("We are waiting")
    
    }
  
  else if (payload.score > 200 && waiting == false) {
    
    audio.currentTime = 5;
    audio.play()
    
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


