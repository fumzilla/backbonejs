var app = app ||{};

app.LibraryView = Backbone.View.extend({
  el: '#books',

  initialize: function( initialBooks ){
    this.collection = new app.Library( initialBooks );
    this.render()

    this.listenTo( this.collection, 'add', this.renderBook );
  },

  events:{
    'click #add':'addBook'
  },

  addBook: function( e ) {
    e.preventDefault();

    var formData = {};

    $( '#addBook div' ).children( 'input' ).each( function( i, el ){
      if( $( el ).val() != ''){
        formData[ el.id ]= $( el ).val();
        console.log( el.type );
      }
    });

    this.collection.add( new app.Book( formData ));
  },

  // Render library by rendering each book in its collection.
  render: function(){
    this.collection.each( function( item ) {
      this.renderBook( item );
    }, this );
  },

  // Render a book by creating a BookView and appending
  // elements it renders to the library's element.
  renderBook: function( item ){
    var bookView = new app.BookView({
      model: item
    });
    this.$el.append( bookView.render().el );
  }
});
