import template from './cube.html';
import controller from './cube.controller';
import './cube.scss'


let cubeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'cube'
};

export default cubeComponent;
