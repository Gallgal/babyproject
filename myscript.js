// 라이브러리
var lyricsEng = "Wise men say /Only fools rush in /But I can't help /falling in love with you /Shall I stay? /Would it be a sin /If I can't help falling in love with you? /Like a river flows /Surely to the sea /Darling, so it goes /Some things are meant to be /Take my hand /Take my whole life, too /For I can't help falling in love with you/ ";
var lyricsE = lyricsEng.split("/");
var lyricsKor = "똑똑한 사람들은 그러죠, /사랑에 빠지는 건 바보같은 일이라고. /하지만 저는요 /당신을 사랑할 수 밖에 없는 걸요? /곁에 있어도 될까요? /제가 그래도 될까요? /내가 당신을 사랑할 수 밖에 없다면요./강이 흘러 흘러 /바다로 흘러가듯이/사랑스런 사람아, 결국 그렇게 될 거예요 /어떤 일들은 때론 거스를 수  없대요. /내 손을 잡아주세요 /내 인생도 전부 /난 당신을 사랑하지 않을 수 없으니까요./ ";
var lyricsK = lyricsKor.split("/");

// intro ---------------------------------------------
let name = prompt('성을 제외한 당신의 이름을 입력해주세요.', '길동');
        var t = document.getElementById("introBox");
        t.onclick = function(){
                this.style.display = 'none';
                baby.play();
        }

        baby.onended = function(){
                bgm.play();
                //monitor();
                int.style.display='none';
                s1f();

                //자막 타이밍 ---------------------

chLyricsK(lyricsK[0],6.8);
chLyricsK(lyricsK[1],12.8);
chLyricsK(lyricsK[2],20);
chLyricsK(lyricsK[3],25.4);
chLyricsK(lyricsK[4],33.8);
chLyricsK(lyricsK[5],41);
chLyricsK(lyricsK[6],47.3);
chLyricsK(lyricsK[7],61);
chLyricsK(lyricsK[8],64.5);
chLyricsK(lyricsK[9],68.3);
chLyricsK(lyricsK[10],71.5);
chLyricsK(lyricsK[11],80.3);
chLyricsK(lyricsK[12],85.8);
chLyricsK(lyricsK[13],92.7);
chLyricsK(lyricsE[14],123);


function chLyricsK(lyrics,time){
        setTimeout(function(){
                lK.innerHTML = lyrics; 
        },time*1000);
        }

chLyricsE(lyricsE[0],6.8);
chLyricsE(lyricsE[1],12.8);
chLyricsE(lyricsE[2],20);
chLyricsE(lyricsE[3],25.4);
chLyricsE(lyricsE[4],33.8);
chLyricsE(lyricsE[5],41);
chLyricsE(lyricsE[6],47.3);
chLyricsE(lyricsE[7],61);
chLyricsE(lyricsE[8],64.5);
chLyricsE(lyricsE[9],68.3);
chLyricsE(lyricsE[10],71.5);
chLyricsE(lyricsE[11],80.3);
chLyricsE(lyricsE[12],85.8);
chLyricsE(lyricsE[13],92.7);
chLyricsE(lyricsE[14],123);


function chLyricsE(lyrics,time){
        setTimeout(function(){
                lE.innerHTML = lyrics; 
        },time*1000);
        //if (s== lyricsK.length){clearInterval();}
}
}
            
// s1 ------------------------------------------------
function s1f(){
        setTimeout(function(){
                console.log("지금부터 이미지 들어갑니다")
                var y = document.getElementById("ican");
                y.className = "ican";
                },20000);
        setTimeout(function(){
                var u = document.getElementById("s1");
                u.style.display = 'none';
                s2f();
                },33800);
}


// s2 ------------------------------------------------
function s2f(){
        window.onmousemove = function(e){
                var g = document.getElementById("grp");
                let a = document.createElement("div");
                a.className = "circle";
                a.style.width = 250 + e.timeStamp/1000 + "px";
                a.style.height = 250 + e.timeStamp/1000 + "px";
                a.style.left = e.clientX + "px";
                a.style.top = e.clientY + "px";
                g.appendChild(a);
        }
        let q = document.getElementById("s2");
        setTimeout(function(){
        q.className = 'mamma';
        console.log("무쟈게 더러운 내 코드");},100);
        setTimeout(function(){
                s3f();
                q.style.display = 'none';
        },27200);
}

// s3 -------------------------------------------------
function s3f(){
        console.log("졸려요");
        var animal = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35"];
        let p = document.getElementById("aniph");
        for(i=0; i<300; i++){
                let pho = document.createElement("img");
                pho.className = "photoclass";
                pho.src = animal[randomBH(0,34)] + ".png";
                pho.onmouseover = function(){
                this.style.opacity = 0.67;
                this.style.transition = 3 + 's';
                };
                p.appendChild(pho);
        };

        p.className = 'aniph';

        function randomBH(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;}

        let r = document.getElementById("s3");
        setTimeout(function(){
                r.style.display = 'none';
                s4f();
        },19300);
}


//s4 --------------------------------------------
let x = document.getElementById("s4");
function s4f(){
        x.style.display = 'block';
        console.log("끝이 다가온당");
        let h1 = document.getElementById("bHand");
        let h2 = document.getElementById("bHand2");
        let h3 = document.getElementById("tHand");
        let h4= document.getElementById("mHand");

let currentDroppable = null;
 h1.onmousedown = function(event) {
     h2.style.display = 'none';

      let shiftX = event.clientX - h1.getBoundingClientRect().left;
      let shiftY = event.clientY - h1.getBoundingClientRect().top;

      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        h1.style.left = pageX - shiftX + 'px';
        h1.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        h1.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        h1.hidden = false;


        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      h1.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        h1.onmouseup = null;
      };

    };

 function enterDroppable(elem) {
      h1.style.display = 'none';
      h3.style.opacity = '1.0'
        setTimeout(function(){
                var bgimg = document.body.appendChild(bg);
                bgimg.src = "bg.png"
                bgimg.id = "bg"
                bg.style.zIndex = '5'}, 100);
      }

   function leaveDroppable(elem) {
    }


    h1.ondragstart = function() {
      return false;
};
setTimeout(function(){
                x.style.display = 'none';
                outro2();
        },22400);

}
// s5f -----------------------------------------------------
// function outro(){
//         let w = document.getElementById("outro");
//         w.style.display = 'block';
//         console.log("끝이 다가온당");
// }
// outro ---------------------------------------------------
function outro2(){
        let b = document.getElementById("bl");
        b.className = 'blink';
        let w = document.getElementById("outro");
        w.style.display = 'block';
        w.className = 'outro';
        console.log("끝이 다가온당");
        setTimeout(function(){let aya = checkBatchimEnding(name)?'아':'야';
        const content = '나의 세상에 찾아와줘서 고마워, \n ' + name + aya + '.' ;
        const text = document.querySelector(".text");
        let i = 0;

        function typing(){
            if (i < content.length) {
            let txt = content.charAt(i);
            text.innerHTML += txt;
            i++;
            }
        }

        function checkBatchimEnding(name) {
          var lastLetter = name[name.length - 1];
          var uni = lastLetter.charCodeAt(0);
          if (uni < 44032 || uni > 55203) return null;
          return (uni - 44032) % 28 != 0;
        }

        let d = document.getElementById("done");
        d.onclick = function(){location.reload();}

        setInterval(typing, 200);},5000);
        
}


//--------------커렌트 타임

   /*function monitor(){
                setInterval(track,100);
        }

        function track(){
                moni.innerHTML = bgm.currentTime;
        }*/
