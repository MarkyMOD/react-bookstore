import React from 'react'


  const CartTotal = (props)=> {
    let totalPIC = props.cartItemsList.map(price => price.product.price)
    let total = (totalPIC.length>0) ? (totalPIC.reduce((a,b) => a+b)): 0.00

    return (
      <div className="container">
      <br/>
        <div className="col-md-12">
          <div className="row">
            Total Price: ${total.toFixed(2)}
          </div>
        </div>
        <br/>
      </div>



    )
  }

export default CartTotal
