const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');
app.use(morgan('combined'));

//Templae engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/tintuc', (req, res) => {
    res.render('news');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
