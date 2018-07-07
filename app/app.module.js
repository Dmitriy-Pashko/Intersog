import angular from 'angular';
import uirouter from '../node_modules/@uirouter/angularjs';
import dashboard from './dashboard/dashboard.module';

require('./main.scss');
angular.module('app', [
  uirouter,
  'ngMaterial',
  'dashboard'
]);
