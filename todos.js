//check off specific todos by clicking
$("ul").on("click", "li", function(){
    //if li is gray
    if($(this).css("color") === "rgb(128, 128, 128)"){
       //then turn it black
        $(this).css(
            {
            color:"black",
        textDecoration:"none"
    })
    }
    //else
    else {
        //turn it gray
$(this).css(
    {
    color:"gray",
textDecoration:"line-through"
})
    }

});

//another way to to this avove is to creat a css style
 //e.g completed{ 
   //  color: gray; 
     //text-decoration:line-through
    //}
//then go to your .js and type 
//$("li").click( function(){
  //  $(this).ToggleClass("completed")

  //click on x to delete an item

  $("ul").on("click", "span", function(event){    
$(this).parent().fadeOut(500, function(){
    $(this).remove()
})
event.stopPropagation();
  });

  $("input").keypress(function(event){
      if(event.which === 13){
      //adding new todo from the input
var todoTest = $(this).val();
  $(this).val("");
//create a new li and add to the text
$("ul").append("<li><span> x </span>" + todoTest + "</li>");

      };
  });