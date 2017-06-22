import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addValue(){
      this.sendAction();
    }
  }
});
