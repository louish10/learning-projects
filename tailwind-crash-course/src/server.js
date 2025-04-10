import express from 'express'
import path from 'path'
import url from 'url'

const app = express()
const __dirname = import.meta.dirname
console.log(__dirname)

// server stylesheets
app.use(express.static(__dirname + '/public'));

app.get('/',  (req, res) => {
    res.sendFile(path.join( __dirname, "index.html"));

});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`)); 
