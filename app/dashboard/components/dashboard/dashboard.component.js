import dashboardHtml from './dashboard.html';

/* @ngInject */
let dashboardComponent = {
  bindings: { campaigns: '<' },
  template: dashboardHtml,
  controllerAs: 'dashboard',
  controller:function() {
    let self = this;
    self.limit = 7;
    self.hideCard = function(id) {
      let res = self.campaigns.filter(camp => camp.id !== id);
      self.campaigns = res;
    }
    self.showMore = function() {
      self.limit = self.limit + 8;
    }
  }
}
export default dashboardComponent;
