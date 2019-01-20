import React from 'react'

const ItemInCart = (props) => {
  console.log(props)
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">{props.title}</div>
        <div className="col-md-2">${props.price}</div>
      </div>
    </div>
  )
}

export default ItemInCart
