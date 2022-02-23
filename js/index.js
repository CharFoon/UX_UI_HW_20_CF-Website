
$(".RCHide").hide();
$(".readLessButton").hide();

$(".readMoreButton").on("click", function(){
      $(".RCHide").fadeIn();
      $(".RCHide").show();
      $(".readMoreButton").hide();
      $(".readLessButton").show();
    });

$(".readLessButton").on("click", function(){
     $(".RCHide").hide();
     $(".readLessButton").hide();
     $(".readMoreButton").show();
});


// Console.log () variable here.
