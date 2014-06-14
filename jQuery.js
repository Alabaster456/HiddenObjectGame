$(document).ready(function(){
  
});

//List of sounds for the game.
var YES = new Audio("http://mobcup.co/dl/5EF93FF5F68B74F7245059A823B4018DB5DA7478E8381E06A9635A281E937756E755B90F08AAE5BCDB511F6BF9844E800F3C75F3ADD72D1ECDC75551587BB383D4045EF5E86A221AE121737F62727013E9581DDCDDA6A5B0F017EB693457C5904A3D146AE1A9A9F760C40BA4B27F5ADD9C68");
var ghost = new Audio("http://soundjax.com/reddo/50125%5Eghost.mp3");

//Audio that plays.
ghost.loop = true;
ghost.play();

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
    $(".disappear").fadeOut("slow");
  ghost.pause(); $("#firstlevel").delay(1000).fadeIn("slow");
  $(".lvl1").delay(1000).fadeIn("slow");
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
          $(".nextlevel").delay(500).fadeIn('slow');
          YES.play();
        }
    });
}
function Game2() {
  $("#firstlevel").fadeOut('slow');
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
    });
                                                      }

