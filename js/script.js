
//=======================================================

//Name: Air

//Authors: Mphatso Simbao

//=======================================================


// ========================================================
// Setup 
// ========================================================

var video = document.getElementById('video');
var canvas = document.getElementById('motion');
var score = document.getElementById('score');

function initSuccess() {
	DiffCamEngine.start();
}

function initError() {
	alert('Something went wrong.');
}

setInterval(getchord, 50);

function capture(payload) {
	score.textContent = payload.score;
	
  //Audio controls
	
  if (payload.score > 400) {
    audio.pause();
    audio.currentTime = 0;
    payload.score = 0;    
    // payload.score = 0;
    console.log("lift off!!");
    setTimeout(function(){ audio.play(); }, 10);
    setTimeout(
	    function(
	    {
              audio.pause();
    	      audio.currentTime = 0;
	    }));
	  
  }
}

DiffCamEngine.init({
	video: video,
	motionCanvas: canvas,
	initSuccessCallback: initSuccess,
	initErrorCallback: initError,
	captureCallback: capture
});



