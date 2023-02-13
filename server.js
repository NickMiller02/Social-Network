// Requirements
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// App / Port
const PORT = process.env.PORT || 3001;
const app = express();

// Routes and Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//Set up DB
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Listening on PORT: ${PORT}`);
    });
});