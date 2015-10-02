import Ember from 'ember';
import layout from '../templates/uni-form-input';
import FindsFieldByName from '../mixins/finds-field-by-name';
import TriggersChange from '../mixins/triggers-change';

export default Ember.Component.extend(
  FindsFieldByName,
  TriggersChange,
{

  tagName: 'label',
  classNames: [ 'uni-form-input' ],
  classNameBindings: [ 'disabled', 'required', 'tone' ],
  layout: layout,

  message: Ember.computed.reads('field.message'),
  name: Ember.computed.reads('property'),
  required: Ember.computed.reads('field.required'),
  tone: Ember.computed.reads('field.tone'),
  value: Ember.computed.alias('field.value'),

  placeholder: function () {
    return (this.get('property') || '').dasherize().replace(/-/g, ' ').capitalize();
  }.property('property'),

});
