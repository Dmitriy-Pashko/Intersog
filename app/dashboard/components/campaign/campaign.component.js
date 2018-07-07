import campaignHtml from './campaign.html';

/* @ngInject */
let campaignComponent = {
  bindings: { campaign: '<' },
  template: campaignHtml,
  controllerAs: 'cmp',
  controller:function($log, $filter) {
    let self = this;
    self.tags = [];
    self.approved = [];
    self.rejected = [];
    self.photoFilter = function(filter) {
      let res = self.campaign.media.filter(med => med.social_network === filter);
      self.campaign.media = res;
    }
    self.otherTabPost = function(tab, id) {
      let post = self.campaign.media.find(pst =>pst.id === id);
      if (tab === 'app') {
        self.approved.push(post);
      } else {
        self.rejected.push(post);
      }
      let res = self.campaign.media.filter(camp => camp.id !== id);
      self.campaign.media = res;
    }
    self.changeMind = function(tab, id) {
      if (tab === 'app') {
        let post = self.rejected.find(pst => pst.id === id);
        self.approved.push(post);
        let res = self.rejected.filter(rej => rej.id !== id);
        self.rejected = res;
      } else {
        let post = self.approved.find(pst => pst.id === id);
        self.rejected.push(post);
        let res = self.approved.filter(rej => rej.id !== id);
        self.approved = res;
      }
    }
    self.captionFilter = function(arr) {
      angular.forEach(arr, function(item) {
        self.campaign.media = $filter('filter')(self.campaign.media, item.trim());
      })
    }
  }
}

export default campaignComponent;
