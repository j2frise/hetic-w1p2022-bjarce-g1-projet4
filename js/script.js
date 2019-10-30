function tourne(){
    document.getElementById("button").setAttribute("onclick","");
    var ws = window.innerWidth;
    var hs = window.innerHeight;
    var detecte = document.getElementById("button").getAttribute("rel");
    
      var elemUn = document.getElementById("un");
      var elemDeux = document.getElementById("deux");
      var elemTrois = document.getElementById("trois");
      var elemquatre = document.getElementById("quatre");
      var posLarge = 0;
      var posHaut = 0;
      
    if(detecte == 0)
    {
      document.getElementsByTagName("h3")[1].setAttribute("class","");
      document.getElementsByTagName("h3")[3].setAttribute("class","");
      document.getElementsByTagName("h3")[2].setAttribute("class","");
      document.getElementsByTagName("h3")[0].setAttribute("class","");
        var idLarge = setInterval(frameLarge, 5);
        var idHaut = setInterval(frameHaut, 13.9);
      
        function frameLarge() {
            if (posLarge == (ws - 140)) {
              document.getElementsByTagName("h3")[2].setAttribute("class","animated infinite bounce delay-1s");
              document.getElementsByTagName("h3")[0].setAttribute("class","animated infinite flash delay-1s");
              clearInterval(idLarge);
              document.getElementById("button").setAttribute("onclick","tourne();");
            } else {
              posLarge++;
              elemUn.style.left = posLarge + 'px';
              elemUn.style.top = 0 + 'px';
              elemUn.style.right = 'auto';
              elemUn.style.bottom = 'auto';
              elemTrois.style.right = posLarge + 'px';
              elemTrois.style.bottom = 0 + 'px';
              elemTrois.style.top = 'auto';
              elemTrois.style.left = 'auto';
            }
        }

        function frameHaut() {
            if (posHaut == (hs - 140)) {
              document.getElementsByTagName("h3")[1].setAttribute("class","animated infinite rubberBand delay-1s");
              document.getElementsByTagName("h3")[3].setAttribute("class","animated infinite flash delay-1s");
              clearInterval(idHaut);
              document.getElementById("button").setAttribute("onclick","tourne();");
            } else {
              posHaut++;
              elemDeux.style.top = posHaut + 'px';
              elemDeux.style.right =  0+ 'px';
              elemDeux.style.left = 'auto';
              elemDeux.style.bottom = 'auto';
              elemquatre.style.bottom = posHaut + 'px';
              elemquatre.style.left =  0+ 'px';
              elemquatre.style.top = 'auto';
              elemquatre.style.right = 'auto';
            }
        }
        document.getElementById("button").setAttribute("rel","1");
    }
    else if(detecte == 1)
    {	
      document.getElementsByTagName("h3")[1].setAttribute("class","");
      document.getElementsByTagName("h3")[3].setAttribute("class","");
      document.getElementsByTagName("h3")[2].setAttribute("class","");
      document.getElementsByTagName("h3")[0].setAttribute("class","");
        var idLarge = setInterval(frameLarge, 5);
        var idHaut = setInterval(frameHaut, 13.9);
      
        function frameLarge() {
            if (posLarge == (ws - 140)) {
              document.getElementsByTagName("h3")[3].setAttribute("class","animated infinite bounce delay-1s");
              document.getElementsByTagName("h3")[1].setAttribute("class","animated infinite flash delay-1s");
              clearInterval(idLarge);
              document.getElementById("button").setAttribute("onclick","tourne();");
            } else {
              posLarge++;
              elemDeux.style.right = posLarge + 'px';
              elemDeux.style.left = 'auto';
              elemDeux.style.top = 'auto';
              elemDeux.style.bottom = 0 + 'px';
              elemquatre.style.left = posLarge + 'px';
              elemquatre.style.top =  0 + 'px';
              elemquatre.style.bottom = 'auto';
              elemquatre.style.right = 'auto';
            }
        }

        function frameHaut() {
            if (posHaut == (hs - 140)) {
              document.getElementsByTagName("h3")[0].setAttribute("class","animated infinite rubberBand delay-1s");
              document.getElementsByTagName("h3")[2].setAttribute("class","animated infinite wobble delay-1s");
              clearInterval(idHaut);
              document.getElementById("button").setAttribute("onclick","tourne();");
            } else {
              posHaut++;
              elemUn.style.top = posHaut + 'px';
              elemUn.style.right =  0 + 'px';
              elemUn.style.bottom = 'auto';
              elemUn.style.left = 'auto';
              elemTrois.style.bottom = posHaut + 'px';
              elemTrois.style.left =  0 + 'px';
              elemTrois.style.top = 'auto';
              elemTrois.style.right = 'auto';
            }
        }
        document.getElementById("button").setAttribute("rel","2");
    }
    else if(detecte == 2)
    {	
      document.getElementsByTagName("h3")[1].setAttribute("class","");
      document.getElementsByTagName("h3")[3].setAttribute("class","");
      document.getElementsByTagName("h3")[2].setAttribute("class","");
      document.getElementsByTagName("h3")[0].setAttribute("class","");
        var idLarge = setInterval(frameLarge, 5);
        var idHaut = setInterval(frameHaut, 13.9);
      
        function frameLarge() {
            if (posLarge == (ws - 140)) {
              document.getElementsByTagName("h3")[0].setAttribute("class","animated infinite wobble delay-1s");
              document.getElementsByTagName("h3")[2].setAttribute("class","animated infinite bounce delay-1s");
              clearInterval(idLarge);
              document.getElementById("button").setAttribute("onclick","tourne();");
            } else {
              posLarge++;
              elemUn.style.right = posLarge + 'px';
              elemUn.style.left = 'auto';
              elemUn.style.top = 'auto';
              elemUn.style.bottom = 0 + 'px';
              elemTrois.style.left = posLarge + 'px';
              elemTrois.style.top =  0 + 'px';
              elemTrois.style.bottom = 'auto';
              elemTrois.style.right = 'auto';
            }
        }

        function frameHaut() {
            if (posHaut == (hs - 140)) {
              document.getElementsByTagName("h3")[1].setAttribute("class","animated infinite wobble delay-1s");
              document.getElementsByTagName("h3")[3].setAttribute("class","animated infinite rubberBand delay-1s");
              clearInterval(idHaut);
              document.getElementById("button").setAttribute("onclick","tourne();");
            } else {
              posHaut++;
              elemquatre.style.top = posHaut + 'px';
              elemquatre.style.right =  0 + 'px';
              elemquatre.style.bottom = 'auto';
              elemquatre.style.left = 'auto';
              elemDeux.style.bottom = posHaut + 'px';
              elemDeux.style.left =  0 + 'px';
              elemDeux.style.top = 'auto';
              elemDeux.style.right = 'auto';
            }
        }
        document.getElementById("button").setAttribute("rel","3");
    }
    else if(detecte == 3)
    {	
      document.getElementsByTagName("h3")[1].setAttribute("class","");
      document.getElementsByTagName("h3")[3].setAttribute("class","");
      document.getElementsByTagName("h3")[2].setAttribute("class","");
      document.getElementsByTagName("h3")[0].setAttribute("class","");
        var idLarge = setInterval(frameLarge, 5);
        var idHaut = setInterval(frameHaut, 13.9);
      
        function frameLarge() {
            if (posLarge == (ws - 140)) {
              document.getElementsByTagName("h3")[3].setAttribute("class","animated infinite flash delay-1s");
              document.getElementsByTagName("h3")[1].setAttribute("class","animated infinite bounce delay-1s");
              clearInterval(idLarge);
              document.getElementById("button").setAttribute("onclick","tourne();");
            } else {
              posLarge++;
              elemDeux.style.left = posLarge + 'px';
              elemDeux.style.right = 'auto';
              elemDeux.style.bottom = 'auto';
              elemDeux.style.top = 0 + 'px';
              elemquatre.style.right = posLarge + 'px';
              elemquatre.style.bottom =  0 + 'px';
              elemquatre.style.top = 'auto';
              elemquatre.style.left = 'auto';
            }
        }

        function frameHaut() {
            if (posHaut == (hs - 140)) {
              document.getElementsByTagName("h3")[0].setAttribute("class","animated infinite wobble delay-1s");
              document.getElementsByTagName("h3")[2].setAttribute("class","animated infinite rubberBand delay-1s");
              clearInterval(idHaut);
              document.getElementById("button").setAttribute("onclick","tourne();");
            } else {
              posHaut++;
              elemUn.style.bottom = posHaut + 'px';
              elemUn.style.left =  0 + 'px';
              elemUn.style.top = 'auto';
              elemUn.style.right = 'auto';
              elemTrois.style.top = posHaut + 'px';
              elemTrois.style.right =  0 + 'px';
              elemTrois.style.bottom = 'auto';
              elemTrois.style.left = 'auto';
            }
        }
        document.getElementById("button").setAttribute("rel","0");
    }
}