import React from "react";
//import axios from "axios";
//import {}from "../utils/API";
import API from "../../utils/API";
const SaveButton = props => {
 
    function saveBookDB(book) {
        var dbBook = {
          title: book.title,
          author: book.author,
          description: book.description,
          image: book.image,
          link: book.link
        }
           //need to add a Post request that handles saving books to db
        API.saveBook(dbBook)
            .then( () => alert(`You Saved ${book.title}`))
            .catch(err => console.log(err))
    }
    
        return (
            <div>
                <button className="viewBook btn btn-success"
                    type="primary" 
                    onClick={() => {saveBookDB(props)}}
                >
                    Save Book
                </button>
            </div>
        );
  }

  export default SaveButton;