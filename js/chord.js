var time;

function getchord() {
  //amajor
  if ( (E == 1) && (A == 1) && (C_ == 1) ){
           time = audio.currentTime;
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Famajor.wav?v=1580127638637';
  
      }
      
  //cmajor
  else if ((C == 1) && (E == 1) && (Ca == 1)){
    
              time = audio.currentTime;
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Fcmajor.wav?v=1580127634437';
       
      }
  //dmajor
  else if ((f_ == 1) && (D == 1) && (A == 1)){
    
              time = audio.currentTime;
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Fdmajor.wav?v=1580127634501'
        audio.currentTime = time;
      audio.play();
    
  }
  //emajor
  else if ((G_ == 1) && (E == 1) && (B == 1)){
    
              time = audio.currentTime;
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Femajor.wav?v=1580127634332'
    
    
  }
  //fmajor
  else if ((f == 1) && (C == 1) && (A == 1) && (Fd == 1)){
    
              time = audio.currentTime;
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Ffmajor.wav?v=1580127634627'
     
    
  }
  //gmajor
  else if ((B == 1) && (G == 1) && (g == 1)){
    
              time = audio.currentTime;
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Fgmajor.wav?v=1580127634513'
    
   
  }

  
  //=======================================================================
  //Full Chords
  //=======================================================================
  
  //amajor
  else if ( (a_chord == 1) ){
           time = audio.currentTime;
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Famajor.wav?v=1580127638637';

      }
      
  //cmajor
  else if ( c_chord == 1){
    
              time = audio.currentTime;
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Fcmajor.wav?v=1580127634437';
  
      }
  //dmajor
  else if ( (d_chord == 1)){
    
              time = audio.currentTime;
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Fdmajor.wav?v=1580127634501'
 
    
  }
  //emajor
  else if (  (e_chord == 1)){
    
              time = audio.currentTime;
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Femajor.wav?v=1580127634332'
    
  }
  //fmajor
  else if (  (f_chord == 1)){
    
              time = audio.currentTime;
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Ffmajor.wav?v=1580127634627'

    
  }
  //gmajor
  else if (   (g_chord == 1)){
    
              time = audio.currentTime;
      audio.src = 'https://cdn.glitch.com/bde82fbb-ee14-4c97-a669-94a07bcbedb3%2Fgmajor.wav?v=1580127634513'
   
  }


}


