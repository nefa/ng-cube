import angular from 'angular';
import Navbar from './navbar/navbar';
import Cube from './cube/cube';
import Calendar from './calendar/calendar';
import EventForm from './eventform/eventForm';

let commonModule = angular.module('app.common', [
  Navbar,
  Cube,
  Calendar,
  EventForm
])
  
.name;

export default commonModule;
