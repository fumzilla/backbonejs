// GET : READ Index
jQuery.get( '/api/books/', function(data, textStatus, jqXHR){
    console.log( 'Get response:' );
    console.dir( data );
    console.log( textStatus );
    console.dir( jqXHR );
  }
);

// POST : CREATE
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

// GET : READ ID
jQuery.get( '/api/books/53330065f1c028f017000001', function(data, textStatus, jqXHR){
    console.log( 'Get response:' );
    console.dir( data );
    console.log( textStatus );
    console.dir( jqXHR );
  }
);

// PUT : UPDATE ID
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

// DELETE : DELETE ID
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
