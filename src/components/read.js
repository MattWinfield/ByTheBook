import React, { Component } from 'react';
import { Books } from './books';


export class Read extends React.Component {
    state = {
        books: [
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
        ]
    };
    render() {/*Render Method To display Read*/
        return (
            <div>
                <h1>This is my Read Component</h1>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}
