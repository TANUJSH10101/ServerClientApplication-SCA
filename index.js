const express = require('express'); //importing express module and setting it to express variable
const app = express();

app.listen(3000, () => console.log('listning to 3000')); // listning to port 3000
app.use(express.static('public'));                       // serving public folder default file to the listning request
