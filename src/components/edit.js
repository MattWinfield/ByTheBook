import React, { Component } from 'react';
import axios from 'axios';


export class Edit extends React.Component {

    constructor(props) {
        super(props);

        //Bind the onMethods
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookYear = this.onChangeBookYear.bind(this);
        this.onChangeBookISBN = this.onChangeBookISBN.bind(this);
        this.onChangeBookGenre = this.onChangeBookGenre.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);



        //construct the created book object's properties
        this.state = {
            Title: '',
            Author: '',
            Year: '',
            ISBN: '',
            Genre: '',
            Cover: ''
        }
    }

    componentDidMount() {//When this component is Mounted/Active
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
            .then(//returns this method if promise is fulfilled
                (response) => {
                    //update the form with the Document Data
                    this.setState({
                        _id: response.data._id,
                        Title: response.data.title,
                        Year: response.data.year,
                        Poster: response.data.poster
                    })
                }
            )
            .catch(//returns this method if promise is not fulfilled
                (error) => {
                    console.log(error)//log the promise error to the console
                }
            )
    }


    onChangeBookTitle(e) {//add the forms title to the constructed book object 
        this.setState({ Title: e.target.value })
    }

    onChangeBookAuthor(e) {//add the forms year to the constructed book object 
        this.setState({ Author: e.target.value })
    }

    onChangeBookYear(e) {//add the forms year to the constructed book object 
        this.setState({ Year: e.target.value })
    }

    onChangeBookISBN(e) {//add the forms poster to the constructed book object 
        this.setState({ ISBN: e.target.value })
    }

    onChangeBookGenre(e) {//add the forms poster to the constructed book object 
        this.setState({ Genre: e.target.value })
    }

    onChangeBookCover(e) {//add the forms poster to the constructed book object 
        this.setState({ Cover: e.target.value })
    }

    onSubmit(e) {//Method to call when form is submitted
        e.preventDefault();//Only call when content of form is not default
        alert("Book: " + this.state.Title
            + " Author: " + this.state.Author
            + " Year: " + this.state.Year
            + " ISBN: " + this.state.ISBN
            + " Genre: " + this.state.Genre
            + " Cover: " + this.state.Cover);

        const newBook = {
            Title: this.state.Title,
            Author: this.state.Author,
            Year: this.state.Year,
            ISBN: this.state.ISBN,
            Genre: this.state.Genre,
            Cover: this.state.Cover
        }

        axios.post('http://localhost:4000/api/books', newBook)//Post request that will return a Promise
            .then((res) => {
                console.log(res)//If promise fulfilled, log it to console
            })
            .catch((err) => {
                console.log(err)//Otherwise log the error
            });
    }



    render() {/* Render Method To display create*/
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Book Year: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeBookYear}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Add Book ISBN: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.ISBN}
                            onChange={this.onChangeBookISBN}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Add Book Genre: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Genre}
                            onChange={this.onChangeBookGenre}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Cover}
                            onChange={this.onChangeBookCover}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Edit Book"
                            className="btn btn-primary"
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}
