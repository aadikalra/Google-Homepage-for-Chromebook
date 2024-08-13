const express = require('express');
const app = express();
const path = require('path');
const port = 4590;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.clear();
    console.log(`Listening on port ${port}`);
});