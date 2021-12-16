import React, { Component } from 'react';


export class Create extends React.Component {

    constructor() {
        super();

        //Bind the onMethods
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookYear = this.onChangeBookYear.bind(this);
        this.onChangeBookISBN = this.onChangeBookISBN.bind(this);
        this.onChangeBookGenre = this.onChangeBookGenre.bind(this);

        //construct the created movie object's properties
        this.state = {
            Title: '',
            Author: '',
            Year: '',
            ISBN: '',
            Genre: '',
            Cover: ''
        }
    }

    onChangeBookTitle(e) {//add the forms title to the constructed movie object 
        this.setState({ Title: e.target.value })
    }

    onChangeBookAuthor(e) {//add the forms year to the constructed movie object 
        this.setState({ Author: e.target.value })
    }

    onChangeBookYear(e) {//add the forms year to the constructed movie object 
        this.setState({ Year: e.target.value })
    }

    onChangeBookISBN(e) {//add the forms poster to the constructed movie object 
        this.setState({ ISBN: e.target.value })
    }

    onChangeBookGenre(e) {//add the forms poster to the constructed movie object 
        this.setState({ Genre: e.target.value })
    }

    onChangeBookCover(e) {//add the forms poster to the constructed movie object 
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
        this.setState({
            Title: '',
            Author: '',
            Year: '',
            ISBN: '',
            Genre: '',
            Cover: ''
        })
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
                            value={this.state.Year}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Book Year: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeBookYear}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Add Book Genre: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeBookGenre}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Add Book ISBN: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeBookISBN}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeBookCover}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Add Book"
                            className="btn btn-primary"
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}
