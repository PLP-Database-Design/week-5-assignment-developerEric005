const express = require('express')
const app = express()
//Question 1 goes here
app.get('/patients', (req, res) => {
    const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});

//Question 2 goes here
app.get('/providers', (req, res) => {
    const query = 'SELECT first_name, last_name, provider_specialty FROM providers';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});
//Question 3 goes here
app.get('/patients/:first_name', (req, res) => {
    const firstName = req.params.first_name;
    const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients WHERE first_name = ?';

    connection.query(query, [firstName], (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});
//Question 4 goes here
app.get('/providers/:specialty', (req, res) => {
    const specialty = req.params.specialty;
    const query = 'SELECT first_name, last_name, provider_specialty FROM providers WHERE provider_specialty = ?';

    connection.query(query, [specialty], (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});




const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is runng on http://localhost:${PORT}`)
})