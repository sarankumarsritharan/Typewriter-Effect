const textDisplay = document.getElementById('text')
const phrases =["Hello my name is Saran","I am studying Full Stack Developer couse", "I love to work in software"]
let i=0;
let j=0;
let isDeleting = false; 
let isend=false
let currentphrase = []
function loop() {
    isend=false
    textDisplay.innerHTML = currentphrase.join('')
  if(i < phrases.length){      // array is i

      if(!isDeleting && j <= phrases[i].length){
          currentphrase.push(phrases[i][j])
          j++ 
          console.log('Add a letter',j)                        
        }
        if(isDeleting && j <= phrases[i].length){
            currentphrase.pop (phrases[i][j])
            j--
            console.log('Remove a letter',j)                        
          }

        if(j == phrases[i].length){
            isend = true;
            isDeleting =true;
        }
        if(isDeleting && j==0){
            currentphrase=[]
            isDeleting=false
            i++
            if(i == phrases.length){
                i = 0
            }
        
        }
        
      }
      const speedup=Math.random()*(90-50)+50   // for Deleting
      const normalspeed=Math.random()*(300-100)+100 
      const time =isend ? 200 : isDeleting ? speedup : normalspeed    
  //isend to slow down at end of each word
  setTimeout(loop,time)
}

loop()