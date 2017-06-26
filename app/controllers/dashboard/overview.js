import Ember from 'ember';

export default Ember.Controller.extend({
  balance: Ember.computed.alias('model')
});
