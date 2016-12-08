import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cubeComponent from './cube.component';

let cubeModule = angular.module('cube', [uiRouter])
.component('cube', cubeComponent)
.name;

export default cubeModule;
