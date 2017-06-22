import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').fetchData();
  },
  store: Ember.inject.service()
});
