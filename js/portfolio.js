$(document).ready(function(){
	$("#all").addClass('current-li');
	$("nav > ul > li").click(function(){
		mainDirect(this.id);
	});
});


function makeSmaller(){
	$('.work > figure').removeClass('current').addClass('not-current');
	$('nav > ul > li').removeClass('current-li');
}
function mainDirect(generation){
	makeSmaller();
	$("#" + generation).addClass('current-li');
	//add the class to the ID selector
	$("." + generation).removeClass("not-current");
	$('.' + generation).addClass('current');

	if(generation == 'all'){
		
		$(".work > figure").removeClass('current, not-current');
	}
}