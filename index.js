const express = require('express')
const app = express()
const port = 3000

var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'foo',
  password : 'bar'
});


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/registerCluster', (req,res) => {
    connection.connect();
    console.log(req.connection);
    connection.query('SELECT * FROM dota.bots WHERE `status` = "idle"', (err, rows, fields) => {
        if(err) throw err;
        rows.forEach(function(item){
            console.log(item);
        })
    })
    res.end();
    
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
