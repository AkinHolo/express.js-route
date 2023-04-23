const express = require('express');
const app = express();


// Home page route
app.get('/', (req, res) => {
    res.send('Home page <a href="/services">Our Services</a> | <a href="/contact">Contact Us<a/>');
});


// Our Services page route
app.get('/services', (req, res) => {
    res.send('Welcome to our Service page. We render quality Services! <a href="/">Home</a> | <a href="/contact">Contact Us</a>');
});


// Contact page route
app.get('/contact', (req, res) => {
    res.send('Contact us now! <a href="/">Home</a> | <a href="/services">Our Services</a> ')
})

const port = 4000;
app.listen(port, () => {
    console.log('Server is running on port ${port}');
});