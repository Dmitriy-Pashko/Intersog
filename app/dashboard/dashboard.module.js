import angular from 'angular';
import routing from './dashboard.route';
import dashboardComponent from './dashboard.component';
import campaignComponent from './campaign.component';
import service from './dashboard.service';
/* @ngInject */
angular
  .module('dashboard', [])
  .component('dashboard', dashboardComponent)
  .component('campaign', campaignComponent)
  .factory('dashboardService', service)
  .config(routing);
