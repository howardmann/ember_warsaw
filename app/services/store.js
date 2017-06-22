import Ember from 'ember';

let data = Ember.Object.extend({
  incomes: 100,
  expenses: 50,
  balance: Ember.computed('incomes', 'expenses', function(){
    return this.get('incomes') - this.get('expenses');
  })
});

export default Ember.Service.extend({
  fetchData(){
    return data.create();
  }
});
