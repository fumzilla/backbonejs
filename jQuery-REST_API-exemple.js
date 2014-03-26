// GET
jQuery.get( '/api/books/', function(data, textStatus, jqXHR){
    console.log( 'Get response:' );
    console.dir( data );
    console.log( textStatus );
    console.dir( jqXHR );
  }
);

// POST
jQuery.post( '/api/books', {
  'title':'Jean Prendrai',
  'author':'Pour 1 Dollar',
  'releaseDate' : new Date( 2012, 5, 3 ).getTime()
  },
  function(data, textStatus, jqXHR){
    console.log( 'Post response:' );
    console.dir( data );
    console.log( textStatus );
    console.dir( jqXHR );
  }
);

// GET iD
jQuery.get( '/api/books/53330065f1c028f017000001', function(data, textStatus, jqXHR){
    console.log( 'Get response:' );
    console.dir( data );
    console.log( textStatus );
    console.dir( jqXHR );
  }
);

// PUT / UPDATE
jQuery.ajax({
  url: '/api/books/53330065f1c028f017000001',
  type: 'PUT',
  data: {
    'title': 'Yes Papa',
    'author': 'Jean Molle',
    'releaseDate': new Date(2015, 8, 12).getTime()
  },
  success: function(data, textStatus, jqXHR){
    console.log( 'Post response:' );
    console.dir( data );
    console.log( textStatus );
    console.dir( jqXHR );
  }
});

// DELETE
jQuery.ajax({
  url: '/api/books/53330065f1c028f017000001',
  type: 'DELETE',
  success: function(data, textStatus, jqXHR){
    console.log( 'Post response:' );
    console.dir( data );
    console.log( textStatus );
    console.dir( jqXHR );
  }
});
