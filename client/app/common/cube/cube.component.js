import template from './cube.html';
import controller from './cube.controller';
import './cube.scss'


let cubeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  transclude: {
  	front: '?cubeFrontFace',
  	right: '?cubeRightFace',
  	left: '?cubeLeftFace'
  },
  controller,
  controllerAs: 'cube'
};

export default cubeComponent;
