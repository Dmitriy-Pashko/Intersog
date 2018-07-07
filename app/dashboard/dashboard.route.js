function dashboardRoutes($stateProvider, $urlRouterProvider) {
  // $locationProvider.html5Mode(true);
  $urlRouterProvider.when('/', '/dashboard');
  $urlRouterProvider.when('', '/dashboard');
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      component: 'dashboard',
      resolve: {
        campaigns: function(dashboardService, $log) {
          return dashboardService.getAllCampaigns();
        }

      }
    });
  $stateProvider
    .state('campaign', {
      url: '/dashboard/campaigns/{campaignId}',
      component: 'campaign',
      resolve: {
        campaign: function(dashboardService, $transition$, $log) {
          return dashboardService.getCampaign($transition$.params().campaignId);
        }
      }
    });
}
/* @ngInject */
export default dashboardRoutes;
