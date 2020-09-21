var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  <blink> <h4 class="card-title"><p align="left" ><font color="#DC143C"><b>Technical Commands</font><p></h4></blink>
                  <br> 
                <div align="left">
                  <font size="4" color="#3F2163"><div class="now-ui-icons gestures_tap-01" >What is your name</div></font><!--Adding chart from do.js-->
				  <br>
				   <font size="4"><div class="now-ui-icons gestures_tap-01" >I am Xena </div></font>
				   <br>
				    <font size="4" color="#3F2163"><div class="now-ui-icons gestures_tap-01" >Search location?</div></font>
				  <font size="4" color="#3F2163"><div class="now-ui-icons gestures_tap-01" >Search location?</div></font>
				  
				 