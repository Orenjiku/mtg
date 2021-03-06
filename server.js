const express = require('express');
// const morgan = require('morgan');
const path = require('path');
const compression = require('compression');
const mtgRouter = require('./resources/mtgRouter.js');

const app = express();

app.use(compression());
// app.use(morgan('dev'));
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));
app.use( express.static( path.join( __dirname, './client/dist' )));

app.use(mtgRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));