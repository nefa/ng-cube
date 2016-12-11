import angular from 'angular';
import eventFormComponent from './eventForm.component';

angular.module('eventFormModule', []);
export default angular.module('eventFormModule')
.component('eventForm', eventFormComponent)
.name;
