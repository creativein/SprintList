(function() {
    'use strict';

    angular.module('SprintList', ['ui.router','ngAnimate','ionic']).controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$scope', '$location', '$rootScope'];

    function ApplicationController($scope, $location, $rootScope,$element) { //can we replace these three variables with ApplicationController? -BG
        $scope.$on('$stateChangeSuccess', onStateChangeSuccess);

        function onStateChangeSuccess(event, toState, toParams, fromState, fromParams) {
	}		
	/*--- onClick overlay ---*/
	$scope.divoverlay = function($event){
		var currentItem = $event.currentTarget;
		var updateUrl;
		$(currentItem).parents('.task-wrapper').toggleClass('activateDargandDrop');
		$('#clear_list_button').text("Done Sorting").addClass('bluebtn');
		$( "#sortable" ).sortable();
	}	
    }
	
	
	/*-------------------- Menu Toggle Animation starts -----------------------*/
	
	angular.module('SprintList').animation('.slide-toggle', ['$animateCss', function($animateCss) {
        return {
            addClass: function(element, className, doneFn) {
                if (className == 'ng-hide') {
					document.getElementById('menu_overlay').style.visibility = "hidden";
					document.getElementById('menu_overlay').style.opacity = "0";
                    var animator = $animateCss(element, {                    
                        to: {height: '0px'}
                    });
                    if (animator) {
                        return animator.start().finally(function() {
                            element[0].style.height = '';
                            doneFn();
                        });
                    }
                }
				
                doneFn();
            },
            removeClass: function(element, className, doneFn) {
                if (className == 'ng-hide') {
					//alert("test");
					document.getElementById('menu_overlay').style.visibility = "visible";
					document.getElementById('menu_overlay').style.opacity = "1";
                    var height = element[0].offsetHeight;
                    var animator = $animateCss(element, {
                        from: {height: '0px', opacity: 0},
                        to: {height: height + 'px', opacity: 1}
                    });
                    if (animator) {
                     return animator.start().finally(doneFn);
                    }
                }
                doneFn();
            }
        };
    }]);
		/*-------------------- Menu Toggle Animation ends -----------------------*/



})();
