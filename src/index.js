const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');
const methodOverride = require('method-override');

const db = require('./config/db');
const route = require('./routes');

//Connect to DB;
db.connect();
app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
//HTTP logger
app.use(morgan('combined'));

// Truyền đường dẫn để css được
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));
//Templae engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
