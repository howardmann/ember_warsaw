import Ember from 'ember';

export function toCurrency(params/*, hash*/) {
  let fixed = Number(params).toFixed(2);
  return 'A$' + fixed;
}

export default Ember.Helper.helper(toCurrency);
