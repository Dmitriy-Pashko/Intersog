import campaignHtml from './campaign.html';

/* @ngInject */
let campaignComponent = {
  bindings: { campaign: '<' },
  template: campaignHtml,
  controllerAs: 'cmp',
  controller:function($log) {
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
      $log.log(arr);
      angular.forEach(arr, function(item) {
        let res = self.campaign.media.map((cap)=>cap.caption).filter((el)=> {
          if (el.includes(item)) {
            return el;
          }
        });
        $log.log(res);
      })
    }
    // It is not working. I stopped here because I made half of it and it seems alredy
    //  comlicated and I cannot think clearly to finish it but I promise to send code
    // right now so I apologise for giving up to early :)
  }
}

export default campaignComponent;
