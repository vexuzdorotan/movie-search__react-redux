require('dotenv').config({ path: './config/config.env' });
require('./db/mongoose')();
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const favoriteRouters = require('./routes/favorites');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: '*' }));

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join('public')));
}

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/favorites', favoriteRouters);

if (process.env.NODE_ENV !== 'development') {
  app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
