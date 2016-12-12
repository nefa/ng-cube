import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import dateTimePicker from 'bootstrap-ui-datetime-picker';


import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
// import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    uiBootstrap
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
