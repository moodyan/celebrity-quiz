$(document).ready(function(){
  $("form#quiz").submit(function(event){

    var gender = $("#gender").val();
    var qual = $("select#quality").val();
    var attr = $("select#attribute").val();
    var date = $("select#date").val();
    var quality1 = $(".quality-1").val();
    var quality2 = $(".quality-2").val();
    var quality3 = $(".quality-3").val();
    var attribute1 = $(".attribute-1").val();
    var attribute2 = $(".attribute-2").val();
    var attribute3 = $(".attribute-3").val();
    var date1 = $(".date-1").val();
    var date2 = $(".date-2").val();
    var date3 = $(".date-3").val();

    if (gender === "male") {
      if (qual === quality1 && attr === attribute1 && date === date1) {
        $("img#rogen").show();
        $("img#rogen").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute1 && date === date2) {
        $("img#jesse").show();
        $("img#jesse").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute1 && date === date3) {
        $("img#tom").show();
        $("img#tom").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute2 && date === date1) {
        $("img#usher").show();
        $("img#usher").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute2 && date === date2) {
        $("img#rogen").show();
        $("img#rogen").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute2 && date === date3) {
        $("img#jesse").show();
        $("img#jesse").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute3 && date === date1) {
        $("img#tom").show();
        $("img#tom").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute3 && date === date2) {
        $("img#usher").show();
        $("img#usher").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute3 && date === date3) {
        $("img#rogen").show();
        $("img#rogen").siblings("img").hide();
      }

      //next, start at quality 2
      if (qual === quality2 && attr === attribute1 && date === date1) {
        $("img#jesse").show();
        $("img#jesse").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute1 && date === date2) {
        $("img#tom").show();
        $("img#tom").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute1 && date === date3) {
        $("img#usher").show();
        $("img#usher").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute2 && date === date1) {
        $("img#rogen").show();
        $("img#rogen").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute2 && date === date2) {
        $("img#jesse").show();
        $("img#jesse").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute2 && date === date3) {
        $("img#tom").show();
        $("img#tom").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute3 && date === date1) {
        $("img#usher").show();
        $("img#usher").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute3 && date === date2) {
        $("img#rogen").show();
        $("img#rogen").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute3 && date === date3) {
        $("img#rogen").show();
        $("img#rogen").siblings("img").hide();
      }
      //next, start at quality 3
      if (qual === quality3 && attr === attribute1 && date === date1) {
        $("img#tom").show();
        $("img#tom").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute1 && date === date2) {
        $("img#tom").show();
        $("img#tom").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute1 && date === date3) {
        $("img#rogen").show();
        $("img#rogen").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute2 && date === date1) {
        $("img#jesse").show();
        $("img#jesse").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute2 && date === date2) {
        $("img#jesse").show();
        $("img#jesse").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute2 && date === date3) {
        $("img#rogen").show();
        $("img#rogen").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute3 && date === date1) {
        $("img#tom").show();
        $("img#tom").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute3 && date === date2) {
        $("img#usher").show();
        $("img#usher").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute3 && date === date3) {
        $("img#usher").show();
        $("img#usher").siblings("img").hide();
      }
    }
    //These are female options
    else {
      if (qual === quality1 && attr === attribute1 && date === date1) {
        $("img#emma-stone").show();
        $("img#emma-stone").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute1 && date === date2) {
        $("img#emma-watson").show();
        $("img#emma-watson").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute1 && date === date3) {
        $("img#beyonce").show();
        $("img#beyonce").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute2 && date === date1) {
        $("img#angelina").show();
        $("img#angelina").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute2 && date === date2) {
        $("img#emma-stone").show();
        $("img#emma-stone").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute2 && date === date3) {
        $("img#emma-watson").show();
        $("img#emma-watson").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute3 && date === date1) {
        $("img#beyonce").show();
        $("img#beyonce").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute3 && date === date2) {
        $("img#angelina").show();
        $("img#angelina").siblings("img").hide();
      }
      if (qual === quality1 && attr === attribute3 && date === date3) {
        $("img#emma-stone").show();
        $("img#emma-stone").siblings("img").hide();
      }

      //next, start at quality 2
      if (qual === quality2 && attr === attribute1 && date === date1) {
        $("img#emma-watson").show();
        $("img#emma-watson").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute1 && date === date2) {
        $("img#beyonce").show();
        $("img#beyonce").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute1 && date === date3) {
        $("img#angelina").show();
        $("img#angelina").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute2 && date === date1) {
        $("img#emma-stone").show();
        $("img#emma-stone").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute2 && date === date2) {
        $("img#emma-watson").show();
        $("img#emma-watson").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute2 && date === date3) {
        $("img#beyonce").show();
        $("img#beyonce").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute3 && date === date1) {
        $("img#angelina").show();
        $("img#angelina").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute3 && date === date2) {
        $("img#emma-stone").show();
        $("img#emma-stone").siblings("img").hide();
      }
      if (qual === quality2 && attr === attribute3 && date === date3) {
        $("img#emma-stone").show();
        $("img#emma-stone").siblings("img").hide();
      }
      //next, start at quality 3
      if (qual === quality3 && attr === attribute1 && date === date1) {
        $("img#beyonce").show();
        $("img#beyonce").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute1 && date === date2) {
        $("img#beyonce").show();
        $("img#beyonce").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute1 && date === date3) {
        $("img#emma-stone").show();
        $("img#emma-stone").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute2 && date === date1) {
        $("img#emma-watson").show();
        $("img#emma-watson").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute2 && date === date2) {
        $("img#emma-watson").show();
        $("img#emma-watson").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute2 && date === date3) {
        $("img#emma-stone").show();
        $("img#emma-stone").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute3 && date === date1) {
        $("img#beyonce").show();
        $("img#beyonce").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute3 && date === date2) {
        $("img#angelina").show();
        $("img#angelina").siblings("img").hide();
      }
      if (qual === quality3 && attr === attribute3 && date === date3) {
        $("img#angelina").show();
        $("img#angelina").siblings("img").hide();
      }
    }


  event.preventDefault();
  });
});
