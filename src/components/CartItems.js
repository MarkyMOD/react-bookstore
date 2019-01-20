import React from 'react'
import ItemInCart from './ItemInCart';

const CartItems = (props) => {
  let cartList = props.cartItemsList.map(item =>
    <ItemInCart key={item.id} title={item.product.title} price={item.product.price}/>)


  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
          </div>
        </div>
        {cartList}
      </div>
    </div>
  )
}

export default CartItems
