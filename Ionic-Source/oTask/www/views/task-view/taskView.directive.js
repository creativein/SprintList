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
              template: '<textarea class="curve" ng-model="vm.newDescription" type="text" name="new_task" id="task_input_field" placeholder="New List Item ..."></textarea>',  
              link: function(scope,element,attrs){
                            $('#task_input_field').focus(function() {
                                $('#toggleDiv').fadeIn();
                               // $('#start_task_button').fadeIn();
                                $(this).attr('placeholder', dynamic_placeholder());
                            }).blur(function() {
                                if($(this).val() == ''){
                                    $('#toggleDiv').fadeOut();   
                                    //$('#start_task_button').fadeOut();   
                                }
                                $(this).attr('placeholder', 'New List Item ...');
                                 
                            })
                    }
            };
        })
		.
  directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: [ "$scope", function($scope) {
        var panes = $scope.panes = [];
 
        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }
 
        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      }],
      template:
        '<div class="tabbable">' +
          '<ul class="nav nav-tabs">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
              '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
            '</li>' +
          '</ul>' +
          '<div class="tab-content" ng-transclude></div>' +
        '</div>',
      replace: true
    };
  }).
  directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
      replace: true
    };
  })
})();