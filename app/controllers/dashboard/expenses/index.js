import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addValue(){
      let value = $('.input-number').val();
      // Add value to model incomes
      let model = this.get('model');
      let updatedValue = model.get('expenses') + Number(value);
      model.set('expenses', updatedValue);
      // Redirect to overview
      this.transitionToRoute('dashboard.overview');
    }
  }
});
