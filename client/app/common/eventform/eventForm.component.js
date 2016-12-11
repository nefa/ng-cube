import './eventForm.scss';

let eventFormComponent = {
  
  bindings: {
    submit: '&sendData',
    props: '<item',
    editable: '<',
    id: '<'
  },
  controller: class EvtentFormController {
  
    constructor() {
      this.dataModel = {};   
    }
    
    $onInit() {
      this.dataModel = Object.assign({}, this.props || {});
      console.log(this)
    }
    $onChanges(changes) {
      this.dataModel = Object.assign(this.dataModel, 
        changes.props && changes.props.currentValue || this.dataModel)
    }
    clearForm() {this.dataModel = {}}
    checkStatus() {
      console.log(this.form)
    }
    
  },
  controllerAs: 'evtFormCtrl',
  templateUrl: 'app/common/eventform/eventForm.html'

};

export default eventFormComponent
