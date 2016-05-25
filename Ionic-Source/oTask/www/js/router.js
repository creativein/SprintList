/**
 * Created by eruiz on 11/11/2015
 */
(function() {
    'use strict';

    angular.module('SprintList')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
		
        
        $urlRouterProvider.otherwise('/taskView');
        $stateProvider
            .state('taskView', {
                url: '/taskView',
                templateUrl: 'views/task-view/taskView.html',
                controller: 'TaskViewController as vm'
            })
			 .state('taskStatus', {
                url: '/taskStatus',
                templateUrl: 'views/task-view/TaskStatus.html',
                controller: 'TaskViewController as vm'
            })
    }
})();
