import angular from 'angular';
import cubeComponent from './cube.component';

angular.module('cube', []);
export default angular.module('cube')
.component('cube', cubeComponent)
.name;


