const express = require('express') //Creates a variable to Include Express with the node REQUIRE Function
const cors = require('cors') //Creates a variable to Include CORS with the node REQUIRE Function
const app = express() //Create an Express application and store as a Varaible
const bodyParser = require('body-parser') //Creates a variable to Include Body-Parser with the node REQUIRE Function
const mongoose = require('mongoose') //Creates a variable to Include Mongoose with the node REQUIRE Function
const port = 4000 //Define a Port variable

app.use(cors());//Specify the Server app to use CORS

app.use(function (req, res, next) {//Add CORS Access Control specs to header of HTTP responses
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const connectionString = "mongodb+srv://matt:matt@mwinfield.iyix2.mongodb.net/books?retryWrites=true&w=majority"//Store the MongoDB Connection URL
mongoose.connect(connectionString, { useNewUrlParser: true });//Use mongoose to connect to our MongoDB Database

const Schema = mongoose.Schema;//Create a Mongoose Schema to store to the DB
var bookSchema = new Schema({//Map the Schema with the book variables
    Title: String,
    Author: String,
    Year: String,
    ISBN: String,
    Genre: String,
    Cover: String
});
var BookModel = mongoose.model("book", bookSchema)//Create a Data Model using the Schema Interface to store as an object


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

app.get('/api/books', (req, res) => {//Create another Node response to a HTTP Get request at the /api/books Address of localHost, responding with JSON Data
    BookModel.find((err, data) => {//Use Mongoose Find method to retrieve data from Data Model
        console.log(data);
        res.json(data);//Return Data model from DB as JSON
    })
})

app.get('/api/books/:id', (req, res) => {//Create another Node response to a HTTP Get request at the /api/books/:id Address of localHost
    console.log(req.params.id)//Log the ID from the Address Bar

    BookModel.findById(req.params.id, (err, data) => {//Use the Mongoose FindbyID Method and a callback function to return any document with that ID
        res.json(data)
    });
})


app.post('/api/books', (req, res) => {
    console.log('post Sucessfull');
    BookModel.create({//Use Mongoose Create Function to create document with the post data
        Title: req.body.Title,
        Author: req.body.Author,
        Year: req.body.Year,
        ISBN: req.body.ISBN,
        Genre: req.body.Genre,
        Cover: req.body.Cover
    });
})

app.put('/api/books/:id', (req, res) => {//Create another Node response to a HTTP Put request at the /api/books/:id Address of localHost
    console.log(req.params.id)//Log the ID from the Address Bar

    console.log(req.body);

    BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {//Use the Mongoose FindbyIDAndUpdate Method and a callback function to Update any document with that ID
            res.send(data)
        }
    );
})

app.delete('/api/books/:id', (req, res) => {//Create another Node response to a HTTP Delete request at the /api/books/:id Address of localHost
    console.log("Delete Book: " + req.params.id)//Log the ID from the Address Bar
    BookModel.findByIdAndDelete(req.params.id, (err, data) => {//Use the Mongoose FindbyIDAndUpdate Method and a callback function to Update any document with that ID
        res.send(data)
    }
    );
})