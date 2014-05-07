$(document).ready(function(){
  
});

/* This is a list of sounds for the game. Each one has a purpose, and the variable names' shows it */

var ghost = new Audio("http://soundjax.com/reddo/50125%5Eghost.mp3");
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
function Game(){
  $(".disappear").fadeOut("slow");
  ghost.pause();
  $("#firstlevel").delay(1000).fadeIn("slow");
  $(".lvl1").delay(1000).fadeIn("slow");
  $("#clock").one("click",function(){
    $("#clock").fadeOut("slow");
    $("#clocklist").fadeOut("slow");
  });
  $("#ring").one("click",function(){
  $("#ring").fadeOut("slow");
    $("#ringlist").fadeOut("slow");
    
  });
  $("#magnifyingglass").one("click",function(){
    $("#magnifyingglass").fadeOut("slow");
    $("#magnifyingglasslist").fadeOut("slow");
  });
  $("#hammer").one("click",function(){
    $("#hammer").fadeOut("slow");
    $("#hammerlist").fadeOut("slow");
  });
}
//END
