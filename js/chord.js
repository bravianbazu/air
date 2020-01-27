function getchord() {
  // alert('hi');
  //amajor
  if ( (E == 1) && (A == 1) && (C_ == 1) ){
      audio.src = '../chords/amajor.wav';
      }
      
  //cmajor
  else if ((C == 1) && (E == 1) && (Ca == 1)){
      audio.src = '../chords/cmajor.wav';
      }
  //dmajor
  else if ((f_ == 1) && (D == 1) && (A == 1)){
      audio.src = '../chords/dmajor.wav'
    
  }
  //emajor
  else if ((G_ == 1) && (E == 1) && (B_ == 1)){
      audio.src = '../chords/emajor.wav'
    
  }
  //fmajor
  else if ((f == 1) && (C == 1) && (A == 1) && (Fd == 1)){
      audio.src = '../chords/fmajor.wav'
    
  }
  //gmajor
  else if ((B == 1) && (G == 1) && (g == 1)){
      audio.src = '../chords/gmajor.wav'
   
  }
}

