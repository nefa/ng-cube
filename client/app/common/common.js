import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Cube from './cube/cube';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Cube
])
  
.name;

export default commonModule;
