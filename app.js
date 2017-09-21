const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Port Number
const port = process.env.PORT || 3001;

// CORS middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, '/client/build')));

// Body Parser Middleware
app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});