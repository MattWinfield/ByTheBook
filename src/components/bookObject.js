import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';//Import Axios to Utilise JSON Promises


export class BookObject extends React.Component {

    constructor() {
        super();

        this.RemoveBook = this.RemoveBook.bind(this);
    }

    RemoveBook(e) {
        e.preventDefault();
        axios.delete("http://localhost:4000/api/books/" + this.props.book._id)
            .then(() => {
                this.props.RefreshData();
            })
            .catch();
    }

    render() {/*Component Render Method To display BookObject*/
        return (

            <div class="book">
                <div class="spine">
                    <h1>{this.props.book.Title}</h1>
                    <h2>{this.props.book.Author}</h2>
                </div>
                <div class="cover">
                    <img src={this.props.book.Cover}></img>
                    <div class="overlay">Published: {this.props.book.Year}<br />Genre: {this.props.book.Genre}<br />ISBN: {this.props.book.ISBN}</div>
                </div>
                <Link to={"/edit/" + this.props.book._id} className="editBtn">Edit</Link>
                <button class="deleteBtn" onClick={this.RemoveBook}>X</button>
            </div>
        );
    }
}
