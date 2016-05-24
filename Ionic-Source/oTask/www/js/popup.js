$(document).ready(function(){
    $(".task_li").click(function(){
	//alert($(this).data("desc"));
	
       $("#popup").show();
       $("#pop_content").html($(this).data("desc"));
       $("#popup_overlay").show();
       $(".pop_close").show();
       $(".bar-footer").hide();
    });
	
	$("#pop_close").click(function(){
	
        $("#popup").hide();
       $("#popup_overlay").hide();
       $(".pop_close").hide();
       $(".bar-footer").show();
    });
});