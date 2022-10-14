const express = require('express');

const app = express();
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(` The server has started successfully on port: ${app.get('port')} !!`);
});
