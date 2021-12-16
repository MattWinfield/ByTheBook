const express = require('express') //Creates a variable to Include Express with the node REQUIRE Function
const app = express() //Create an Express application and store as a Varaible
const port = 4000 //Define a Port variable

app.get('/', (req, res) => {//Create a Node response to a HTTP Get request at the root Address of localHost, responding with a message
    res.send('Hello World')
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