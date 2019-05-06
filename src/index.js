const path = require('path');
const express = require('express');

//SET UP EXPRESS SERVER
const app = express();

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public');


// serve up the public directory
app.use(express.static(publicDirectoryPath));

// listen on port 3000
app.listen(port, ()=>{
  console.log(`Server is up on port ${port}!`);
});
