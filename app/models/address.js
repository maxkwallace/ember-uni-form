import DS from 'ember-data';
import ProvidesUIErrors from '../mixins/provides-ui-errors';
import VerifiesAddress from '../mixins/verifies-address';


export default DS.Model.extend(  
	Ember.Validations.Mixin,
  ProvidesUIErrors,
  VerifiesAddress,
{
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  addressLine_1: DS.attr('string'),
  addressLine_2: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zipCode: DS.attr('string'),
  userId: DS.attr('string'),
  countryId: DS.attr('string'),
  smartyPayload: DS.attr(),

  verifyResult: null,
  verifyString: '',

  name: function () {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),

  addressString: function () {
    return '%@ %@ %@, %@ %@'.fmt(
        this.get('addressLine_1'),
        this.get('addressLine_2'),
        this.get('city'),
        this.get('state'),
        this.get('zipCode')
      );
  }.property('addressLine_1', 'addressLine_2', 'city', 'state', 'zipCode'),

  validations: {
    firstName: {
      length: { maximum: 25 },
      presence: true
    },
    lastName: {
      length: { maximum: 25 },
      presence: true
    },
    addressLine_1: {
      length: { maximum: 35 },
      presence: true
    },
    addressLine_2: {
      length: { maximum: 35 }
    },
    city: {
      length: { maximum: 40 },
      presence: true
    },
    state: {
      presence: true
    },
    zipCode: {
      numericality: true,
      presence: true
    }
  }

});