class Cube {
	constructor() {
		this.name = 'cube';
		this._deg = 90;
    	this.horizontal = 0;
    	this.vertical = 0;
	}

	spinCube(direction) {
    switch (direction) {
      case "ArrowLeft": //left
        this.vertical -= this._deg; 
        this.cubeSpin = {transform: `rotateY(${this.vertical}deg)`};
        // this.sceneSpin = {transform: "rotateY(-90deg)"};
        break;
      case "ArrowUp": //up
        this.horizontal += this._deg;
        this.cubeSpin = {transform: `rotateX(${this.horizontal}deg)`};
        // this.sceneSpin = {transform: "rotateX(90deg)"};
        break;
      case "ArrowRight": //right
        this.vertical += this._deg;
        this.cubeSpin = {transform: `rotateY(${this.vertical}deg)`};
        // this.sceneSpin = {transform: "rotateY(-90deg)"};
        break;
      case "ArrowDown": //down
        this.horizontal -= this._deg;
        this.cubeSpin = {transform: `rotateX(${this.horizontal}deg)`};
        // this.sceneSpin = {transform: "rotateX(90deg)"};
        break;
      default:
        console.log("no keys")
    }    
  }
}

//angular
class CubeController extends Cube {
  static $inject = ['$document', '$scope'];
  constructor($document, $scope) {
    super();
    this.$document = $document;
    this.$scope = $scope;
  }
  
  $onInit() {
    console.log("cube initialized");
    this.$document.on('keydown', evt => this.$scope.$apply(apply => this.spinCube(evt.code)))
  }
}
//or
//CubeCtrl.$inject = ['$document', '$scope'];
export default CubeController;

//===========End of Cube
