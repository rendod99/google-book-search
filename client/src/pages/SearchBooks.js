import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";



class SearchBooks extends Component {
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    //Value of the search Bar
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //Submit Button Api call
    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleSearchBooks(this.state.search)
        .then(res => { 
            let results = res.data.items
            results = results.map(result => {
                result = {
                    key: result.id,
                    id: result.id,
                    title: result.volumeInfo.title,
                    author: result.volumeInfo.authors,
                    description: result.volumeInfo.description,
                    image: result.volumeInfo.imageLinks.thumbnail,
                    link: result.volumeInfo.infoLink
                }
                return result;
            })
            this.setState({ books: results, error: "" })
                
        })
        .catch(err => this.setState({ error: err.items }));
    }

    
    render() {
        return (
    <div>
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Search Books with GoogleBook API</h1>
            <p className="lead">Type in the Name of Your Favorite book!!!</p>
        </div>
        </div>
            <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
            />  

            <br />   
            <SearchResult books={this.state.books}/>
            
          
    </div>
    )
    }
}

export default SearchBooks