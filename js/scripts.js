$(document).ready(function(){
  // $('.parallax').parallax();
  var offset=$("#stickytest").offset();
  console.log(offset); 
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    $("#stickytest").css("left", st + offset.left);
    $("#stickytest").css("top", st + offset.top);
  })
});
