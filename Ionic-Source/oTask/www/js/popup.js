$(document).ready(function(){
    $(".task_li").click(function(){
	//alert($(this).data("desc"));
	
       $("#popup").show();
       $("#pop_content").html($(this).data("desc"));
       $("#popup_overlay").show();
       $(".pop_close").show();
	   $("#pop_close").html("<i class='icon ion-close'></i>");
	   $(".agree").hide();
       $(".bar-footer").hide();
    });
	
	$("#pop_close").click(function(){
	    $('.close_pop_box').removeClass("tickMark");
       $("#popup").hide();
       $("#popup_overlay").hide();
       $(".pop_close").hide();
       $(".bar-footer").show();
    });
	
	$("#clearListFn").click(function(){
	//alert($(this).data("desc"));
	   $('.close_pop_box').addClass("tickMark");
       $("#popup").show();
	   $("#pop_content").html("Are you sure? You really want to clear the sprint list? There is no coming back.");
	   $(".pop_close").show();
	   $("#pop_close").html("<i class='icon ion-close'></i>");
	   $("#agree").html("<i class='icon ion-checkmark-round'></i>");
       $(".agree").show();
	   $("#popup_overlay").hide();
       $(".bar-footer").hide();
    });
});