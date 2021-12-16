import React, { Component } from 'react';
import { Books } from './books';
import axios from 'axios';//Import Axios to Utilise JSON Promises


export class Read extends React.Component {
    state = {//A Variable to store JSON Data 
        books: []
    };


    componentDidMount() {//A Method that will invoke immediately after this component gets mounted
        axios.get("http://localhost:4000/api/books")
            .then(//returns this method if promise is fulfilled
                (response) => {
                    //update the state variable with the promised JSON BLOB
                    this.setState({ books: response.data.books })
                }
            )
            .catch(//returns this method if promise is not fulfilled
                (error) => {
                    console.log(error)//log the promise error to the console
                }
            );
    }

    render() {/*Render Method To display Read*/
        return (
            <div>
                <h1>This is my Read Component</h1>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}
