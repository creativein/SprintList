/**
 * Created by Niraj Kumar Chauhan on 12/9/2015.
 */
(function () {
    'use strict';
	
    angular.module('SprintList')
        .directive('inputTextarea',function(){

             // return the placeholder text
            function dynamic_placeholder(){
              return  dynamic_placeholder_texts[Math.floor(Math.random()*dynamic_placeholder_texts.length)]
            }
            return{
              restrict: 'E',
              template: '<textarea class="curve textarea_curve" ng-model="vm.newDescription" type="text" name="new_task" id="task_input_field" placeholder="New List Item ..."></textarea>',  
              link: function(scope,element,attrs){
                            $('#task_input_field').focus(function() {
                                $('#toggleDiv').fadeIn(); 
                                $('#task_input_field').removeClass("textarea_curve"); 
                                $('.task_ul').addClass("ul_pad"); 
                                $(this).attr('placeholder', dynamic_placeholder());
                            }).blur(function() {
                                if($(this).val() == ''){
                                    $('#toggleDiv').fadeOut(); 
                                  	$('#task_input_field').addClass("textarea_curve"); 
									$('.task_ul').removeClass("ul_pad"); 
                                }
                                $(this).attr('placeholder', 'New List Item ...');
                                 
                            })
                    }
            };
        })
})();