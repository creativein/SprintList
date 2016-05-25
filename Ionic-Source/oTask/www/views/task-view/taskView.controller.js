/**
 * Created by Eric on 12/9/2015.
 */
(function () {
    'use strict';

    angular.module('SprintList')
        .controller('TaskViewController', TaskViewController);

    TaskViewController.$inject = ['$state', '$scope', '$timeout'];
    function TaskViewController($state, $scope, $timeout) {
		

        var vm = this;

        // View Model Vars
        vm.newDescription = "";

        // Model Functions
        vm.addTask = addTask;
        vm.startTask = startTask;
        vm.HomePage = HomePage;
        vm.Clearlist = Clearlist;
        vm.DefaultAppPage = DefaultAppPage;
        vm.Sprintlist = Sprintlist;
        vm.HeaderDiv = true;
        vm.Progressbar = false;
        vm.deleteTask = deleteTask;
        vm.clearAllTasks = clearAllTasks;

        // Initialize controller
        start();

        function start() {
						//check to see if there is an existing list already
            if (window.localStorage['taskList'] != undefined 
								&& window.localStorage['taskList'] != 'undefined') {
                vm.taskList = JSON.parse(window.localStorage['taskList']);
                //vm.taskList = [];
            }
            else {
                vm.taskList = [];
            }

            vm.isListEmpty = isTaskListEmpty();
        }

        function addTask() {
            // Create and add
			
            var newTask = createNewTask();
			newTask.fulldesc = vm.newDescription;
            newTask.description = vm.newDescription;
            
			//alert(newTask.description.length);
            if(newTask.description.length > 20){
               // newTask.class = "fullView";
			   var desc = newTask.description;
			   var desc =desc.substr(0, 20);
			   var shortDesc = desc + '...';
			   newTask.description = shortDesc;
            }
            newTask.timestamp = new Date().getTime();
            vm.taskList.push(newTask);
            // Update and cleanup
            vm.isListEmpty = isTaskListEmpty();
            vm.newDescription = "";
            window.localStorage['taskList'] = angular.toJson(vm.taskList);
			$timeout(function(){
				document.getElementById("task_input_field").focus();
			},1);
        }
      //         Start button task function starts //
      function startTask()
	  {
		  vm.HeaderDiv = false;
		  vm.Progressbar = true;
		  $(".custom_content").css("height","100%");

	  }
	  
	 //         Start button task function ends   //    

     //    sprint list function starts //
      function Sprintlist()
	  {
		  vm.HeaderDiv = false;
		  $scope.slideToggle = false;
		  vm.Progressbar = true;
		  $(".custom_content").css("height","100%");

	  }
	  
	 //         sprint list function ends //  
    
	//         clear list function starts  //
      
	  function Clearlist()
	  {
		
		window.localStorage.clear();
		$scope.slideToggle = false;
		vm.HeaderDiv = true;
		vm.Progressbar =false;
		start();
		$('.close_pop_box').removeClass("tickMark");
		$("#menu_overlay").css("visibility","hidden");
		$("#menu_overlay").css("opacity","0");
		$("#pop_close").click();
		 
		
	  }
	  
	 //        clear list function ends //
	 
	 //        Add item redirection function start //
	     
		 function HomePage()
	  {
		  vm.HeaderDiv = true;
		  vm.Progressbar = false;
		  $scope.slideToggle = false;
		  $(".custom_content").css("height","83%");
          $timeout(function(){
				document.getElementById("task_input_field").focus();
			},1);
	  }
	  
	  // Add item redirection function ends //
	  
	   //        Default App Page function start //
	     
		 function DefaultAppPage()
	  {
		  vm.HeaderDiv = true;
		  vm.Progressbar = false;
		  $scope.slideToggle = false;
		  $(".custom_content").css("height","83%");

	  }
	  
	  //  Default App Page function ends //
	  
        function deleteTask(index) {
          
            vm.taskList.splice(index, 1);
            //vm.isListEmpty = isTaskListEmpty();
            console.log(index)
            console.log(vm.taskList)
            window.localStorage['taskList'] = angular.toJson(vm.taskList);
            start();
        }

        function clearAllTasks(index) {  
            var x = document.getElementById("clear_list_button");
            if(x.innerHTML == "Done Sorting"){
                $('.task-wrapper').removeClass('activateDargandDrop');
                $('#clear_list_button').text('Clear List').removeClass('bluebtn');
                $( "#sortable" ).sortable( "destroy" );
            }else{
                vm.taskList = [];
                vm.isListEmpty = isTaskListEmpty();
            }
             window.localStorage['taskList'] = angular.toJson(vm.taskList);   
        }

        function createNewTask() {
            return { description: "",timestamp: "" ,fulldesc :"" }
			}

        function isTaskListEmpty() {
            return vm.taskList.length == 0;
        }
    }
})();