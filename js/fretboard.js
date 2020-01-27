// Have pre-defined note values and resfresh them every 250 ms

var F = 0;
var F_ = 0;
var G = 0;

var C = 0;
var C_ = 0;
var D = 0;

var G_ = 0;
var A = 0;
var A_ = 0;

var D_ = 0;
var E = 0;
var Fd = 0;

var A_a = 0;
var B = 0;
var Ca = 0;

var f = 0;
var f_ = 0;
var g = 0;

// Log events flag
var logEvents = false;

// Touch Point cache
var tpCache = new Array();

function enableLog(ev) {
  logEvents = logEvents ? false : true;
}

function log(name, ev, printTargetIds) {
  var o = document.getElementsByTagName("output")[0];
  var s =
    name +
    ": touches = " +
    ev.touches.length +
    " ; targetTouches = " +
    ev.targetTouches.length +
    " ; changedTouches = " +
    ev.changedTouches.length;
  o.innerHTML += s + " <br>";

  if (printTargetIds) {
    s = "";
    for (var i = 0; i < ev.targetTouches.length; i++) {
      s += "... id = " + ev.targetTouches[i].identifier + " <br>";
    }
    o.innerHTML += s;
  }
}

function clearLog(event) {
  var o = document.getElementsByTagName("output")[0];
  o.innerHTML = "";
}

function update_background(ev) {
  // Change background color based on the number simultaneous touches
  // in the event's targetTouches list:
  //   yellow - one tap (or hold)
  //   pink - two taps
  //   lightblue - more than two taps

  switch (ev.targetTouches.length) {
    case 1:
      // Single tap`
      ev.target.style.background = "yellow";

      switch (ev.target.id) {
          case "F":
          F = 1;
          break;
          case "F_":
          F_ = 1;
          break;
          case "G":
          G = 1;
          break;
          
          case "C":
          C = 1;
          break;
          case "C_":
          C_ = 1;
          break;
          case "D":
          D = 1;
          break;
          
          case "G_":
          G_ = 1;
          break;
          case "A":
          A = 1;
          break;
          case "A_":
          A_ = 1;
          break;
          
          case "D_":
          D_ = 1;
          break;
          case "E":
          E = 1;
          break;
          case "Fd":
          Fd = 1;
          break;

          case "A_a":
          A_a = 1;
          break;
          case "B":
          B = 1;
          break;
          case "Ca":
          Ca = 1;
          break;
          
          case "f":
          f = 1;
          break;
          case "f_":
          f_ = 1;
          break;
          case "g":
          g = 1;
          break;
      }
        
      
      
      
      break;
    case 2:
      // Two simultaneous touches
      ev.target.style.background = "pink";
      break;
    default:
      // More than two simultaneous touches
      ev.target.style.background = "lightblue";
  }
}

// This is a very basic 2-touch move/pinch/zoom handler that does not include
// error handling, only handles horizontal moves, etc.
function handle_pinch_zoom(ev) {
  if (ev.targetTouches.length == 2 && ev.changedTouches.length == 2) {
    // Check if the two target touches are the same ones that started
    // the 2-touch
    var point1 = -1,
      point2 = -1;
    for (var i = 0; i < tpCache.length; i++) {
      if (tpCache[i].identifier == ev.targetTouches[0].identifier) point1 = i;
      if (tpCache[i].identifier == ev.targetTouches[1].identifier) point2 = i;
    }
    if (point1 >= 0 && point2 >= 0) {
      // Calculate the difference between the start and move coordinates
      var diff1 = Math.abs(
        tpCache[point1].clientX - ev.targetTouches[0].clientX
      );
      var diff2 = Math.abs(
        tpCache[point2].clientX - ev.targetTouches[1].clientX
      );

      // This threshold is device dependent as well as application specific
      var PINCH_THRESHHOLD = ev.target.clientWidth / 10;
      if (diff1 >= PINCH_THRESHHOLD && diff2 >= PINCH_THRESHHOLD)
        ev.target.style.background = "green";
    } else {
      // empty tpCache
      tpCache = new Array();
    }
  }
}

function start_handler(ev) {
  // If the user makes simultaneious touches, the browser will fire a
  // separate touchstart event for each touch point. Thus if there are
  // three simultaneous touches, the first touchstart event will have
  // targetTouches length of one, the second event will have a length
  // of two, and so on.
  ev.preventDefault();
  // Cache the touch points for later processing of 2-touch pinch/zoom
  if (ev.targetTouches.length == 2) {
    for (var i = 0; i < ev.targetTouches.length; i++) {
      tpCache.push(ev.targetTouches[i]);
    }
  }
  if (logEvents) log("touchStart", ev, true);
  update_background(ev);
}

function move_handler(ev) {
  // Note: if the user makes more than one "simultaneous" touches, most browsers
  // fire at least one touchmove event and some will fire several touchmoves.
  // Consequently, an application might want to "ignore" some touchmoves.
  //
  // This function sets the target element's border to "dashed" to visualy
  // indicate the target received a move event.
  //
  ev.preventDefault();
  if (logEvents) log("touchMove", ev, false);
  // To avoid too much color flashing many touchmove events are started,
  // don't update the background if two touch points are active
  if (!(ev.touches.length == 2 && ev.targetTouches.length == 2))
    update_background(ev);

  // Set the target element's border to dashed to give a clear visual
  // indication the element received a move event.
  // ev.target.style.border = "dashed";

  // Check this event for 2-touch Move/Pinch/Zoom gesture
  handle_pinch_zoom(ev);
}

function end_handler(ev) {
  ev.preventDefault();
  if (logEvents) log(ev.type, ev, false);
  if (ev.targetTouches.length == 0) {
    // Restore background and border to original values
    ev.target.style.background = "white";
    ev.target.style.border = "1px solid black";
    
      
  F = 0;
  F_ = 0;
  G = 0;

  C = 0;
  C_ = 0;
  D = 0;

  G_ = 0;
  A = 0;
  A_ = 0;

  D_ = 0;
  E = 0;
  Fd = 0;

  A_a = 0;
  B = 0;
  Ca = 0;

  f = 0;
  f_ = 0;
  g = 0;
  }
}

function set_handlers(name) {
  // Install event handlers for the given element
  var el = document.getElementById(name);
  el.ontouchstart = start_handler;
  el.ontouchmove = move_handler;
  // Use same handler for touchcancel and touchend
  el.ontouchcancel = end_handler;
  el.ontouchend = end_handler;
}

function init() {
  //       set_handlers("target1");
  //       set_handlers("target2");
  //       set_handlers("target3");
  //       set_handlers("target4");
  //       set_handlers("target5");

  set_handlers("F");
  set_handlers("F_");
  set_handlers("G");

  set_handlers("C");
  set_handlers("C_");
  set_handlers("D");

  set_handlers("G_");
  set_handlers("A");
  set_handlers("A_");

  set_handlers("D_");
  set_handlers("E");
  set_handlers("Fd");

  set_handlers("A_a");
  set_handlers("B");
  set_handlers("Ca");

  set_handlers("f");
  set_handlers("f_");
  set_handlers("g");
}
