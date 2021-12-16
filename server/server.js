const express = require('express') //Creates a variable to Include Express with the node REQUIRE Function
const cors = require('cors') //Creates a variable to Include CORS with the node REQUIRE Function
const app = express() //Create an Express application and store as a Varaible
const bodyParser = require('body-parser') //Creates a variable to Include Body-Parser with the node REQUIRE Function
const port = 4000 //Define a Port variable

app.use(cors());//Specify the Server app to use CORS

app.use(function (req, res, next) {//Add CORS Access Control specs to header of HTTP responses
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {//Create a Node response to a HTTP Get request at the root Address of localHost, responding with a message
    res.send('Connection Is Successful')
})

app.listen(port, () => {//Create a Node HTTP Server and Specify the Port to listen with the 'port' Variable
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/api/books', (req, res, next) => {//Create a Node response to a HTTP Get request at the /api/books Address of localHost, responding with JSON Data
    const books = [
        {
            "Title": "DUNE",
            "Author": "Frank Herbert",
            "Year": "1965",
            "ISBN": "9780441013593",
            "Genre": "Science Fiction",
            "Cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1620503959l/39776179.jpg"
        },
        {
            "Title": "Rendezvous with Rama",
            "Author": "Arthur C. Clarke",
            "Year": "1973",
            "ISBN": "9781857231588",
            "Genre": "Science Fiction",
            "Cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405456427l/112537.jpg"
        },
        {
            "Title": "Starship Troopers",
            "Author": "Robert A Heinlen",
            "Year": "1959",
            "ISBN": "9780441783588",
            "Genre": "Science Fiction",
            "Cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1614054412l/17214.jpg"
        }
    ];
    res.status(200).json({// As well as a response message if successful
        message: 'Posts fetched succesfully!',
        books: books
    });
})

app.post('/api/books', (req, res) => {
    console.log('post Sucessfull');
    console.log(req.body.Title);
    console.log(req.body.Author);
    console.log(req.body.Year);
    console.log(req.body.ISBN);
    console.log(req.body.Genre);
    console.log(req.body.Cover);
})
