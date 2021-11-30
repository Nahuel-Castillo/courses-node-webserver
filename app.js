require('dotenv').config();
const express = require('express');
// const hbs = require('hbs');

const app = express();

//Handlebars
// app.set( 'view engine', 'hbs' );
// hbs.registerPartials( __dirname + '/views/partials');

const port  = process.env.PORT;

//static content
app.use( express.static('public') );
 
//routes using hbs
// app.get('/', ( req, res ) => {
//     res.render('home', { //with hbs
//         title: 'Node curse', //send to view
//         author: 'Nahuel'
//     }); 
// });

// app.get('/generic', ( req, res ) => {
    
//     res.render( 'generic', { //with hbs
//         title: 'Node curse', //send to view
//         author: 'Nahuel'
//     });
// });

// app.get('/elements', ( req, res ) => {
//     res.render('elements', { //with hbs
//         title: 'Node curse', //send to view
//         author: 'Nahuel'
//     });
// });


//normal routes
// app.get('/', (req, res) => {
//   res.send('Root route');
// });
// app.get('/generic', ( req, res ) => {
//     res.sendFile( __dirname + '/public/generic.html' );
// });
// app.get('/elements', ( req, res ) => {
//     res.sendFile( __dirname + '/public/elements.html' );
// });

app.get('*', ( req, res ) => {
    res.status( 404 ).sendFile( __dirname + '/public/index.html');
});
 
app.listen( port, () => {
    console.log(`Server running on ${ port } port`);
} );