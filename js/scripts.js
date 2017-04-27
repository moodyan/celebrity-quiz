$(document).ready(function(){
  $("form#quiz").submit(function(){
    var gender = $("select#gender").val();
    var qual = $("select#quality").val();
    var attr = $("select#attribute").val();
    var date = $("select#date").val();
    if(gender === "male"){
      if (qual === $(".quality-1") && attr === $(".attribute-1") && date === $(".date-1")) {

      }
    }
  });
});
