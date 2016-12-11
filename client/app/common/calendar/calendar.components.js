
export const addEvent = {
  restrict: 'E',
  controller: class AddEvent {
  	static $inject = ['calendarsrv'];

  	constructor(calendarsrv) {
  		this._cs = calendarsrv;
  	}
  	
  	addEvent(payload) {
  		this._cs.addEvent(payload);
  	}
  },
  template: `<event-form 
		send-data="$ctrl.addEvent(payload)"
		editable="false">
	</event-form>`
};

export const editEvent = {
  restrict: 'E',
  // bindings: {
  // 	id: '<',
  // 	props: '<'
  // },
  controller: class EditEvent {
  	static $inject = ['calendarsrv'];

  	constructor(calendarsrv) {
  		this._cs = calendarsrv;
  	}

  	get props() {return this._cs.editItem}
  	
  	editEventItem(payload) {
  		this._cs.editEventItem(payload);
  	}
  },
  template: `<event-form 
		send-data="$ctrl.editEventItem(payload, id)"
		item="$ctrl.props"
		id="$ctrl.id"
		editable="true">
	</event-form>`
};


export const calendarList = {
	restrict: 'E',
	controller: class EventList {
		static $inject = ['calendarsrv'];

		constructor(calendarsrv) {
			this._cs = calendarsrv;
		}

		editItem(event) {
			this._cs.editItem = event;
		}

		get list() {return this._cs.list}
	},
	template: `<ol ng-if="$ctrl.list.length">
    <li ng-repeat="event in $ctrl.list">
      <button ng-click="$ctrl.editItem(event)">edit</button>||
      <button ng-click="$ctrl.deleteEvent(event.id)">delete</button>
      <span ng-bind="event.title"></span><br />
      <span ng-bind="event.content"></span><br />
      <span ng-bind="event.date"></span>
    </li>
  </ol>
  <p ng-if="!$ctrl.list.length">..no item yet...</p>`
}


