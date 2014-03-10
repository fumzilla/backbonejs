//var ListView = Backbone.View.extend({
//  events: {},
//  render: function(){
//    this.$el.html(this.model.toJSON());
//  }
//});
var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var TodosCollection = Backbone.Collection.extend({
  model: Todo
});

var myTodo = new Todo({ title:'Read the Whole Book.', id: 2 });

// pass array of models on collection instantiation
var todos = new TodosCollection([myTodo]);
console.log("Collection size: " + todos.length);

var a = new Todo({ title: 'Go to Jamaica.' });
    b = new Todo({ title: 'Go to China.' });
    c = new Todo({ title: 'Go to Disneyland.' });

var totravel = new TodosCollection([a, b]);
console.log("Collection of travel size: " + totravel.length);

totravel.add(c);
console.log("Collection of travel size: " + totravel.length);


var ItemView = Backbone.View.extend({
  events: {},
  render: function(){
    this.$el.html(this.model.toJSON());
    return this;
  }
});

var ListView = Backbone.View.extend({
  render: function (){

    // Assume our model exposes the item we will display in our list
    var items = this.model.get('item');

    // Loop through each of our items using the Underscore
    // _.each() iterator
    _.each(items, function(item){

      // Create a new instance of ItemView, passing it
      // a specific model item
      var itemView = new ItemView({ model: item });

      // The itemView's DOM element is appended after it has
      // been rendered. Here, the 'return this' is helpful as the itemView
      // renders its model Later, we ask for its output ("el")
      this.$el.append( itemView.render().el );
    },this);
  }
});
