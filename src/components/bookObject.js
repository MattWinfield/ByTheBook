import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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
            <div>
                <Card>
                    <Card.Header>{this.props.book.Title}</Card.Header>{/*Print a Card Head with the JSON Data named Title*/}
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.Cover} width="200px" height="200px"></img>{/*Print an Image with the JSON Data named Cover*/}
                            <footer className="blockquote-footer">
                                <p>{this.props.book.Author}</p>{/*Print a Footer element with the JSON Data named Author*/}
                                <p>{this.props.book.Year}</p>{/*Print a Footer element with the JSON Data named Year*/}
                                <p>{this.props.book.Genre}</p>{/*Print a Footer element with the JSON Data named Genre*/}
                                <p>{this.props.book.ISBN}</p>{/*Print a Footer element with the JSON Data named ISBN*/}

                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.book._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.RemoveBook}>Remove</Button>
                </Card>
            </div>
        );
    }
}
