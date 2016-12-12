import angular from 'angular';
import datepicker from 'angular-ui-bootstrap/src/datepicker';
import timepicker from 'angular-ui-bootstrap/src/timepicker';


import eventFormComponent from './eventForm.component';

angular.module('eventFormModule', [datepicker, timepicker]);

export default angular.module('eventFormModule')
.component('eventForm', eventFormComponent)
.controller('DatepickerDemoCtrl', ['$scope', function ($scope) {
  $scope.minDate = 	new Date();
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
  	console.log($event)
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
}])
.name;
