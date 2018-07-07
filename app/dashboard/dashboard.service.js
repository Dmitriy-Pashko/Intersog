function dashboardService($http, $log) {
  let service = {
    getAllCampaigns: function() {
      return $http.get('http://localhost:3004/campaigns', { cache: true }).then(function(resp) {
        return resp.data;
      });
    },

    getCampaign: function(id) {
      function cmpMatchesParam(cmp) {
        return cmp.id === id;
      }
      return service.getAllCampaigns().then(function (campaigns) {
        return campaigns.find(cmpMatchesParam);
      });
    }
  }

  return service;
}
/* @ngInject */
export default dashboardService;
