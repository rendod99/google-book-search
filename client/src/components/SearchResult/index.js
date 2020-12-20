import React from "react";
//import "./style.css";
import {Row, Col} from "../Grid";
import SaveButton from "../SaveButton";

const SearchResult = props => {
    //console.log(props)
    return (
        <div>
         {props.books.map(book => {
          return (              
            <li key={book.id} className="search-list list-group-item">
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
                    <a href={book.link}>
                        <button className="viewBook btn btn-success">
                            View Book
                    </button>
                    </a>
                    <SaveButton 
                        author={book.author[0] ? book.author[0] : ["No Author Available"]}
                        title={book.title}
                        description={book.description ? book.description : "No Description Available"}
                        image={book.image}
                        link={book.link}
                    />
                </Row>  
            </li>
                            
            );
        })}
    </div>
    )
}
export default SearchResult