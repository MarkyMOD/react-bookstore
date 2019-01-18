import React from 'react';

const Book = (props) => {


    return (
        <div className="card-deck">
          {props.book.map(book => {
            return (
                  <div className="card">
                    <div className="card-img-top">
                      <img key={book.id} src={book.coverUrl} alt={book.title}/>
                    </div>
                  </div>

            )
            })
          }
        </div>
    )
}

export default Book
