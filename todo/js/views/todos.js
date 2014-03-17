app = app || {};

// Todo item view
// -------------------

// The DOM element for a todo item...
app.TodoView = Backbone.View.extend({

  // ...is a list tag.
  tagName: 'li',

  // Cache the template function for a single item.
  template: _.template( $('#item-template').html() ),

  // DOM event specific to an item
  events: {
    'click .toggle' : 'togglecompleted',
    'dblclick label': 'edit',
    'click .destroy': 'clear',
    'keypress .edit': 'updateOnEnter',
    'blur .edit'    : 'close'
  },

  // The TodoView listens for changes  to its model, rerendering. Since there's
  // a one-to-one correspondance between a **Todo** and a **TodoView** in this 
  // app, we set a direct reference on a model for convenience.
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'visible', this.toggleVisible);
  },

  // Rerender the titles of the todo item.
  render: function(){
    this.$el.html( this.template( this.model.toJSON() ) );

    this.$el.toggleClass( 'completed', this.model.get('completed') );
    this.toggleVisible();

    this.$input = this.$('.edit');
    return this;
  },

  // NEW - Toggle visibility of item.
  toggleVisible: function(){
    this.$el.toggleClass( 'hidden', this.isHidden() );
  },

  // NEW - Determines if item should be hidden.
  isHidden: function(){
    var isCompleted = this.model.get('completed');
    return ( // hidden case only
      (!isCompleted && app.TodoFilter === 'completed')
      || (isCompleted && app.TodoFilter === 'active')
    );
  },

  // NEW - Toggle the `"completed"` state of the model.
  togglecompleted: function(){
    this.model.toggle(); 
  },

  // Switch the view into `"editing"` mode, displaying the input field.
  edit: function() {
    this.$el.addClass('editing');
    this.$input.focus();
  },

  // Close `"editing"` mode, saving changes to the todo.
  close: function(){
    var value = this.$input.val().trim();
    if ( value ) {
      this.model.save({ title: value });
    }
    this.$el.removeClass('editing');
  },

  // If you hit `enter`, we're through editing item.
  updateOnEnter: function( e ){
    if ( e.which === ENTER_KEY ){
      this.close();
    }
  },

  // New - Remove the item, destroy the model from
  // **localStorage** and delete its view.
  clear: function(){
    this.model.destroy();
  }
});
