//Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");


	/*
	LOGIC USING IF-ELSE FOR ABOVE SINGLE LINE CODE:
	
	//if li is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
		//turn it black
		$(this).css({
		color: "black";// This keyword lets you select the specific li that you have clicked rather than each li in ul.
		textDecoration: "none"
});
}
//else
else{
	//turn it gray
	$(this).css({
		color: "gray";// This keyword lets you select the specific li that you have clicked rather than each li in ul.
		textDecoration: "line-through"
});
}*/

});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){  //event is an object here.
	$(this).parent().fadeOut(250, function(){
		$(this).remove();
	});
	event.stopPropagation();//A jQuery method that will stop the event from bubbling up.
});

//Selecting the input and then 
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Grabbing new todo text from input
		var todoText = $(this).val();
		//Creating an empty string whenever one hits enter, where "this" acts as a setter rather than a getter.
		$(this).val("");
		//Create a new li and add to ul. To do this we use append method from jQuery, that will add li to html. It takes string of html and it will then append those elements to whatever we selected.
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}	
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});