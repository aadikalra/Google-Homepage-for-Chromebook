const express = require('express');
const app = express();
const path = require('path');
const port = 4590;

const data = [
    {
        name: "Google Classroom",
        url: "classroom.google.com",
        hrf: "https://classroom.google.com/",
        icon: "fa-solid fa-school",
        color: "#34A853"
    }, 
    {
        name: "YouTube",
        url: "www.youtube.com",
        hrf: "https://www.youtube.com/",
        icon: "fa-brands fa-youtube",
        color: "red"
    },
    {
        name: "Apple Music",
        url: "music.apple.com",
        hrf: "https://music.apple.com/",
        icon: "fa-solid fa-music",
        color: "#FA2A55"
    },
    {
        name: "Twitter",
        url: "twitter.com",
        hrf: "https://twitter.com/",
        icon: "fa-brands fa-twitter",
        color: "rgb(28, 147, 228)"
    },
    {
        name: "Airbnb",
        url: "airbnb.com",
        hrf: "https://airbnb.com/",
        icon: "fa-brands fa-airbnb",
        color: "rgb(242, 85, 90)"
    },
    {
        name: "Wikipedia",
        url: "wikipedia.org",
        hrf: "https://wikipedia.org/",
        icon: "fa-brands fa-wikipedia-w",
        color: "rgb(255, 255, 255)"
    },
    {
        name: "Github",
        url: "github.com",
        hrf: "https://github.com/",
        icon: "fa-brands fa-github",
        color: "rgb(255, 255, 255)"
    },
    {
        name: "Xbox",
        url: "xbox.com",
        hrf: "https://xbox.com/",
        icon: "fa-brands fa-xbox",
        color: "rgb(15, 118, 14)"
    }
];

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { data : data });
});

app.listen(port, () => {
    console.clear();
    console.log(`Listening on port ${port}`);
});