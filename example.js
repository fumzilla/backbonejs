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

//-------------------------------------------------------------

var TotravelCollection = new Backbone.Collection();

TotravelCollection.add([
  { id: 1, title: 'go to Jamaicia.', completed: false },
  { id: 2, title: 'go to China.', completed: false },
  { id: 3, title: 'go to Paris.', completed: true }
]);

TotravelCollection.on("add", function(model) {
  console.log("Added " + model.get('title'));
});

TotravelCollection.on("remove", function(model) {
  console.log("Removed " + model.get('title'));
});

TotravelCollection.on("change:completed", function(model) {
  console.log("Completed " + model.get('title'));
});

//-------------------------------------------------------------

TotravelCollection.set([
  { id: 1, title: 'go to Jamaicia.', completed: true },
  { id: 2, title: 'go to China.', completed: false },
  { id: 4, title: 'go to DansTonBraping.', completed: false }
]);
var People = new Backbone.Collection;

People.comparator = function(a, b) {
  return a.get('name') < b.get('name') ? -1 : 1;
};

var tom = new Backbone.Model({name: 'Tom'});
var rob = new Backbone.Model({name: 'Rob'});
var tim = new Backbone.Model({name: 'Tim'});
var zob = new Backbone.Model({name: 'Zob'});
var ank = new Backbone.Model({name: 'Ank'});


People.add([tom, rob, tim, zob, ank]);

console.log(People.indexOf(rob) === 0);
console.log(People.indexOf(tim) === 1);
console.log(People.indexOf(tom) === 2);
console.log(JSON.stringify(People));

//-------------------------------------------------------------

var BoView = Backbone.View.extend({
  el: '#booboo',

  // bind to DOM event using event property
  events: {
    'click [type="checkbox"]': 'clicked',
  },

  initialize: function() {
    // bind to DOM event using jQuery
    this.$el.click(this.jqueryClicked);

    // bien to API events
    this.on('apiEvent', this.callback);
  },

  // 'this' is view
  clicked: function(event) {
    console.log('events handler for ' + this.el.outerHTML);
    this.trigger('apiEvent', event.type);
  },

  // 'this' is handling DOM element
  jqueryClicked: function(event) {
    console.log('jQuery handler for ' + this.outerHTML);
  },

  callback: function(eventType) {
    console.log('event type was ' + eventType);
  }
});

var view = new BoView();

//-------------------------------------------------------------
// Since the original view is still in scope, and the second view instance is also in scope,
// changing data on the model will cause both view instances to respond.
//-------------------------------------------------------------

var ZombieView = Backbone.View.extend({
  template: '#my-view-template',
  initialize: function(){
    this.model.on('change', this.render, this);
  },
  render: function(){ alert('We`re rendering the view'); }
});

var Person = Backbone.Model.extend({
  defaults: {
    firstName : 'Jeremy',
    lastName  : 'Boutrosse',
    email     : 'jeremy@example.com'
  }
});

var Derick = new Person({
  firstName : 'Derick',
  lastName  : 'Baley',
  email     : 'derick@example.com'
});

var zombieView = new ZombieView({
  model: Derick
});

zombieView = new ZombieView({
  model: Derick
});

Derick.set('email','derickbailey@example.com');
