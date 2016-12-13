import angular from 'angular';
import uiRouter from 'angular-ui-router';
// import homeComponent from './home.component';

let testForm = angular.module('test', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('test', {
      url: '/test',
      component: 'testForm'
    });
})

.component('testForm', testFormComponent)
  
.name;

export default testForm;
