import React, { Component } from "react";
import axios from "axios";
import {Row, Col} from "../Grid";


class Saved extends Component {

    state= {
        savedBooks: []
    }

    componentDidMount() {
        this.getBooks();
      }
    
      getBooks = () => {
        axios.get("/api/books")
          .then(res => {
            this.setState({ savedBooks: res.data })
          })
          .catch((err => console.log(err)))
      }

render(){
  return (
    <li className="search-list list-group-item">
    <Row className="SearchResult row">                                      
        <Col size="2" className="bookImage">
            <img src={book.image} alt={book.title} />
        </Col>
        <Col size="9" className="bookInfo">
            <Row>
                <h3 className="bookTitle">{book.title}</h3>
            </Row>
            <Row>
                <h4 className="bookAuthor">{book.author}</h4>
            </Row>
            <Row>
                <p className="bookDescription">{book.description}</p>
            </Row>
        </Col>
    </Row>

    <br/>

    <Row className="buttonDiv ">
        <a href={book.link} target="_blank">
            <button className="viewBook btn btn-success">
                View Book
        </button>
        </a>
    </Row>  
</li>
  );
};


}




export default Saved;