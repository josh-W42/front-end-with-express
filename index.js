// THIS IS OUR BACK-END SERVER, (just in case I forgot somehow);
const express = require('express');
const app = express();
const expressEjsLayouts = require('express-ejs-layouts');

// MIDDLEWARE
// To use ejs
app.set('view engine', 'ejs');
// To use layouts
app.use(expressEjsLayouts);
// Body Parser
app.use(express.urlencoded({ extended: false}));
// For console logging
app.use(require('morgan')('dev'));


// NEW So our front-end javascript we have to serve out public static files that will
// ALWAYS STAY THE SAME, hence the static portion.
app.use(express.static(__dirname+'/public/'));

// ROUTES
app.get('/', (req, res) => {
    res.render('index');
});

// CONTROLLERS (We'll learn more about these later MVC MVC MVC! model view controller lol)

// Listening
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});
