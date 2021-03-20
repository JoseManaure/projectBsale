
// Require packages and set the port
const express = require('express');
const port = 3002;
const app = express();



// Load the MySQL pool connection
const pool = require('../data/config');

// Display all users
app.get('/products', (request, response) => {
    pool.query('SELECT * FROM product', (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// Display a single user by ID
app.get('/product/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('SELECT * FROM product WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});


// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});