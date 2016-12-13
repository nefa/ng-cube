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
      this.dataModel = {
        date: new Date()
      };   
    }
    
    $onInit() {
      this.dataModel = Object.assign({}, this.props || {});
    }
    $onChanges(changes) {
      this.dataModel = Object.assign(this.dataModel, 
        changes.props && changes.props.currentValue || this.dataModel)
    }
    clearForm() {
      this.dataModel = {}
    }
    open() {}
    
  },
  controllerAs: 'evtFormCtrl',
  templateUrl: 'app/common/eventform/eventForm.html'

};

export default eventFormComponent
