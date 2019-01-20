import React from 'react'


const Book = (props) => {

    return (
      <div className="card">
        <input className="card-img-top" type="image" src={props.book.coverUrl} alt={props.book.title} onClick={(e)=> props.addToCart(props.book.id)}/>
        <div className="card-body">
          <h5 className="card-title">{props.book.title}</h5>
          <p className="card-text">{props.book.author}</p>
        </div>
      </div>
    )
}

export default Book
