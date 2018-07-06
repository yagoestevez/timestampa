const express = require( 'express' );
const CORS    = require( 'cors' );
const app     = express( );

// Sets PORT to the enviroment PORT number or 3000.
app.set( 'PORT', process.env.PORT || 3000 );
// Sets Pug as the templating engine.
app.set( 'view engine', 'pug' );
// Defines 'public/' directory for serving static files (css, js, images, etc).
app.use( express.static( `${__dirname}/../public` ) );

// Sets up CORS middleware for freeCodeCamp testing.
const corsOptions = {
  origin: 'http://learn.freecodecamp.org',  
  optionsSuccessStatus: 200
}
app.use( CORS( corsOptions ) );

// When [domain]/ is requested, renders the view views/index.pug.
app.get( '/', ( req,res ) => {              
  res.render( 'index' );
} );

// When [domain]/api/ is requested, renders the view views/index.pug with the 'api' option.
app.get( '/api/', ( req,res ) => {
  res.render( 'index', { api: true } );
} );

// Defines the main GET route for the API: /api/timestamp/
// Note the '?' makes the param optional.
app.get( '/api/timestamp/:date_string?', ( req,res ) => {
  const dateString    = req.params.date_string;
  const isString      = isNaN( dateString * 1 );
  const fromString    = new Date( dateString );
  const fromMillis    = new Date( dateString * 1 );

  // If param is empty, the present Date is passed to date. If not, checks if the param isn't number
  // and returns the Date from the given date string or from milliseconds otherwise.
  let date = !dateString ? new Date( Date.now( ) )
                         : new Date( isString ? fromString : fromMillis );

  // If date_string is not empty and the given date is a string but it lacks the right date format
  // (e.g YYYY-MM-DD), the response says 'Invalid Date'. If not, sends the formatted object.
  res.json(
    date == "Invalid Date"
      ? { error: "Invalid Date" }
      : { "unix": date.getTime( ), "utc": date.toUTCString( ) }
  );

} );

// Renders views/404.pug page in case no route matched.
app.use( ( req,res,next ) => {
  res.status( 404 ).render( '404' );
} );

// Defines the port to be listening on for requests.
app.listen(
  app.get( 'PORT' ), ( ) => console.log( `Listening on port ${app.get( 'PORT' )}` )
);