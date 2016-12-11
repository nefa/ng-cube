import angular from 'angular';
import { addEvent, editEvent, calendarList } from './calendar.components';
import Calendar from './calendar.controller';


let calendarModule = angular.module('calendar', [])
.service('calendarsrv', Calendar)
.component('calendarAddEvent', addEvent)
.component('calendarEventList', calendarList)
.component('calendarEditEvent', editEvent)
.name;


export default calendarModule
