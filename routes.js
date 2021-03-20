// Load the MySQL pool connection
const pool = require('./data/config');

// Display all users
app.get('/products', (request, response) => {
    pool.query('SELECT * FROM product', (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// Display a single user by ID
app.get('/products/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('SELECT * FROM product WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});