$(document).ready(function(){
  
});
var YES = new Audio("http://mobcup.co/dl/5EF93FF5F68B74F7245059A823B4018DB5DA7478E8381E06A9635A281E937756E755B90F08AAE5BCDB511F6BF9844E800F3C75F3ADD72D1ECDC75551587BB383D4045EF5E86A221AE121737F62727013E9581DDCDDA6A5B0F017EB693457C5904A3D146AE1A9A9F760C40BA4B27F5ADD9C68");
var firstlevel = new Audio("http://soundjax.com/reddo/27639%5EHouse_Wren.mp3");

/* This is a list of sounds for the game. Each one has a purpose, and the variable names' shows it */
//
var ghost = new Audio("http://soundjax.com/reddo/50125%5Eghost.mp3");
ghost.loop = true;
ghost.play();
//Remember to re-add the sound..
//END

//Button actvations
function Help(){
  alert("Welcome to Mysterious Findings!");
alert("Find all of the hidden objects in each level with your mouse!");
  alert("Each item that you need to find will be displayed in the lower-right corner!");
  alert("After you manage to find each item hidden, you will be taken to another level!");
  alert("Have fun!");
}

//END
function Game() {
  firstlevel.loop = true;
  firstlevel.play();
    $(".disappear").fadeOut("slow");
  ghost.pause(); $("#firstlevel").delay(1000).fadeIn("slow");
  $(".lvl1").delay(1000).fadeIn("slow");
  $("#indicator").delay(1000).fadeIn('slow');
    var result = 0;
    $("#clock, #ring, #hammer, #magnifyingglass").one("click", function () {
        $(this).fadeOut('slow');
      if (this.id === "clock") {
$("#clocklist").fadeOut('slow');
      } else if (this.id ==="ring") {
        $("#ringlist").fadeOut('slow');
      } else if (this.id === "hammer") {
        $("#hammerlist").fadeOut('slow');
      } else if (this.id === "magnifyingglass") {
      $("#magnifyingglasslist").fadeOut('slow');  
      }
      
        result++;
        if (result === 4) {
            $("#complete").delay(500).fadeIn('slow');
          $("#nextlevel").delay(500).fadeIn('slow');
          firstlevel.pause();
          YES.play();
        }
    });
}
function Game2() {
  $("#firstlevel").fadeOut('slow');
  $(".lvl1").fadeOut('slow');
  $("#complete").fadeOut('slow');
  $("#nextlevel").fadeOut('slow');
  $(".lvl2").fadeIn('slow');
 var result = 0;
    $("#footballhelmet, #microphone, #glue, #fishingpole, #guitar").one("click", function () {
        $(this).fadeOut('slow');
      if (this.id === "guitar") {
$("#guitarlist").fadeOut('slow');
      } else if (this.id ==="glue") {
        $("#gluelist").fadeOut('slow');
      } else if (this.id === "footballhelmet") {
        $("#footballhelmetlist").fadeOut('slow');
      } else if (this.id === "fishingpole") {
      $("#fishingpolelist").fadeOut('slow');  
} else if (this.id === "microphone") {
  $("#microphonelist").fadeOut('slow');
}
            result++;
        if (result === 5) {
            $("#complete2").delay(500).fadeIn('slow');
          $("#nextlevel2").delay(500).fadeIn('slow');
        
          YES.play();
        }
    });
                                                      }
function Game3() {
  $(".lvl2").fadeOut('slow');  $("#complete2").fadeOut('slow');
  $("#nextlevel2").fadeOut('slow');
  $(".lvl3").fadeIn('slow');
   var result = 0;
    $("#pumpkin, #pencil, #eyeball, #doorbell, #spiderweb").one("click", function () {
        $(this).fadeOut('slow');
      if (this.id === "pumpkin") {
$("#pumpkinlist").fadeOut('slow');
      } else if (this.id ==="pencil") {
        $("#pencillist").fadeOut('slow');
      } else if (this.id === "eyeball") {
        $("#eyeballlist").fadeOut('slow');
      } else if (this.id === "doorbell") {
      $("#doorbelllist").fadeOut('slow');  
} else if (this.id === "spiderweb") {
  $("#spiderweblist").fadeOut('slow');
}
            result++;
        if (result === 5) {
            $("#complete2").delay(500).fadeIn('slow');
          $("#nextlevel2").delay(500).fadeIn('slow');
        
          YES.play();
        }
    });
}

