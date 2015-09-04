import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('String'),
  name: DS.attr('String')
});
