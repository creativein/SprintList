// contains static HTML data for the app. These are data that are not dinamically updated. use the TEMPLATE sections to create new data fields. 
			
		

//content variables | TEMPLATE: var a = "";
	var app_title_text = "SprintList";
	var add_button_text = "Add";
	var start_task_button = "Start";
	var empty_list_message_text = "Your list is empty. Add something new! ";
	var clear_list_text = "Clear List";
	var about_otask_text = "About Sprint List";
	//var clear_list_text = "Clear List"; //need to work it out still
	var ok_button_text = "OK, got it!";

//add content to HTML DOM | TEMPLATE: $("#").append();
	$("title").text(app_title_text);
	$("#add_task_button").append(add_button_text);
	$("#start_task_button").html(start_task_button);
	$("#empty_msg").append(empty_list_message_text);
	$("#clear_list_button").append(clear_list_text);
	$("#about_otask_button").append(about_otask_text);
	$("#ok_button").append(ok_button_text);


//Change text Dynamically ..
	var dynamic_placeholder_texts = [ "i.e: Check the letter-box", 
																		"i.e: Buy milk",
																		"i.e: Call Jason",
																		"i.e: Pull request from Nilang",
																		"i.e: Pay phone bill",
																		"i.e: Water the plants"]


	 