var app = app || {};

// TODO MODEL
// --------------------------
// Attributes: 'title', 'order', 'completed'

app.Todo = Backbone.Model.extend({
  
  // Default attributes ensure that each todo created model
  // has 'title, and 'completed' attributes.
  defaults: {
    title: '',
    completed: false
  },

  // Toggle the 'completed' state of this todo item.
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }
});
