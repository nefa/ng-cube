//=====Calendar
export class CalendarItem { //as struct
  constructor(id, title, content, date) {
    Object.assign(this, {id, title, content, date});
  }
}


var counter = 0;
export default class Calendar {
  constructor() {
    console.log('calendar initialized')
    this._list = []; //Item[]
    this._editItem = null; //Item
  }
  
  get list() {return this._list}
  set list(list) {this._list = list}
  
  get editItem() {return this._editItem}
  set editItem(item) {
    this._editItem = item
    console.log(this._editItem)
  }
  
  addEvent(payload) {
    const {title, content, date} = payload;
    const item = new CalendarItem(++counter, title, content, date);
    this.list = [item, ...this.list];
  }
  
  getEvent(id) {
    return this.list.find(i => id == i.id);
  }
  
  editEventItem(payload, id) {
    console.log("editEvent", payload)
    this.list = this.list.map(i => {
      if (id == i.id) {
        const {title, content, date} = payload;
        const item = new CalendarItem(id, title, content, date);
        return item;
      
      } else return i;
    
    })
  }
  
  deleteEvent(id) {
    this.list = this.list.filter(i => id != i.id);
  }
  
}
