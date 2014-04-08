define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/todos.html'
], function($, _, Backbone, todosTemplate){
  var TodoView = Backbone.View.extend({

    // ... is a list tag.
    tagName: 'li',

    // Cache the template function for a single item.
    template: _.template( todosTemplate ),

    // The DOM events specific to an item.
    events: {
      'click .check'             : 'toggleDone',
      'dbclick div.todo-content' : 'edit',
      'click span.todo-destroy'  : 'clear',
      'keypress .todo-input'     : 'updateOnEnter
    },

    // The TodoView listens for changes to its model, rerendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function(){
      this.model.on('change', this.render, this);
      this.model.view = this;
    }
  }
}
