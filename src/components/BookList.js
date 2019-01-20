import React from 'react';
import Book from './Book'

const BookList = (props) => {
  return (
    <div className="card-deck">
      {props.books.map(book => {
        return (
          <Book key={book.id} book={book} addToCart={props.addToCart}/>
        )
      })}

    </div>

  )
}

export default BookList
