import React, { Component } from 'react';
import { BookObject } from './bookObject';

export class Books extends React.Component {
    render() {/*Component Render Method To display Books*/
        return this.props.books.map((book) => {/*For every book in the Read Array, return a Book Object Component*/
            console.log({ book })
            return <BookObject book={book}></BookObject>
        })
    }
}
