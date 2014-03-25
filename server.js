// Module dependencies.
var application_root = __dirname,
    express          = require( 'express' ),    // Web framework
    path             = require( 'path' ),       // Utilities for dealing with file paths
    mongoose         = require( 'mongoose' );   //MongoDB integration

// Create server.
var app = express();

// Server configuration.
app.configure( function() {
  // Parses request body and poupulates request.body.
  app.use( express.bodyParser() );

  // Checks request.body for HTTP method overrides.
  app.use( express.methodOverride() );

  // Perform route lookup based on URL and HTTP method.
  app.use( app.router );

  // Where to serve static content
  app.use( express.static( path.join( application_root, 'booksite' ) ) );

  // Show all errors in development.
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true }) );
} );

// Start server.
var port = 4711;
app.listen( port, function(){
  console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});

// Routes.
app.get ( '/api', function( request, response ){
  response.send( 'Library API is running' );
} );

// Connect to database.
mongoose.connect( 'mongodb://localhost/library_database', function( err, db ){
    if( err ){
      return console.log('failed to connect to the database:\n %s', err);
    }else{
      console.log("connected to database");
    }
} );

// Schemas.
var Book = new mongoose.Schema({
  title       : String,
  author      : String,
  releaseDate : Date
});

// Models.
var BookModel = mongoose.model( 'Book', Book );

// Routes: Get a list of all books.
app.get( '/api/books', function( request, response ){
  return BookModel.find( function( err, books ) {
    if( !err ){
      return response.send( books );
    } else {
      return console.log( err );
    }
  });
});
