import Ember from 'ember';

// Used to fix issues with autocomplete on various browsers.
//


export default Ember.Mixin.create({

  changeTriggerInterval: 2500,

  triggerChange: function () {

    // Recursion.
    Ember.run.later(this, function () {
      var $el = this.$();
      if (this.get('isDestroyed') || $el.length === 0) return;
      if ($el.trigger) $el.trigger('change');
      this.triggerChange();
    }, this.get('changeTriggerInterval'));

  }.on('didInsertElement')

});
