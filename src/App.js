import React, { Component } from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal'


class App extends Component {
  state = {

    books: [
      {
        id: 1,
        title: 'JavaScript, The Good Parts',
        author: 'Douglas Crockford',
        pages: "2",
        inCart: false,
        coverUrl: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/284/javascript_the_good_parts.jpg',
        price: 61.99
      },
      {
        id: 2,
        title: 'Learning React Native',
        author: 'Bonnie Eisenman',
        pages: "48",
        inCart: false,
        coverUrl: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/287/learning_react_native.jpg',
        price: 55.99
      },
      {
        id: 3,
        title: 'Functional JavaScript',
        author: 'Michael Fogus',
        pages: "147",
        inCart: false,
        coverUrl: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/297/functional_javascript.jpg',
        price: 37.99
      },
      {
        id: 4,
        title: 'React: Up & Running',
        author: 'Stoyan Stefanov',
        pages: "36",
        inCart: false,
        coverUrl: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/294/react_up_and_running.jpg',
        price: 41.99
      }
    ],

    cartItemsList:[],

    productId: 0

  }



  addToCart = (productId) => {
    let productToAdd = this.state.books.find(product => product.id == productId)
    let newItem = {
      id: this.state.cartItemsList.length + 1,
      product: productToAdd,
    }
    this.setState({cartItemsList:[...this.state.cartItemsList, newItem] })
  }

  getYaSearchOn = (e) => {
    e.preventDefault()
    let filter = this.state.books.filter(search => search.title.toLowerCase() == e.target.value.toLowerCase())
    if(filter.length===0){
      filter = this.state.books.filter(search => search.author.toLowerCase() == e.target.value.toLowerCase())
    }
    if(filter.length===0){
      this.setState({books: [
        {
          id: 1,
          title: 'JavaScript, The Good Parts',
          author: 'Douglas Crockford',
          pages: "2",
          inCart: false,
          coverUrl: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/284/javascript_the_good_parts.jpg',
          price: 61.99
        },
        {
          id: 2,
          title: 'Learning React Native',
          author: 'Bonnie Eisenman',
          pages: "48",
          inCart: false,
          coverUrl: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/287/learning_react_native.jpg',
          price: 55.99
        },
        {
          id: 3,
          title: 'Functional JavaScript',
          author: 'Michael Fogus',
          pages: "147",
          inCart: false,
          coverUrl: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/297/functional_javascript.jpg',
          price: 37.99
        },
        {
          id: 4,
          title: 'React: Up & Running',
          author: 'Stoyan Stefanov',
          pages: "36",
          inCart: false,
          coverUrl: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/294/react_up_and_running.jpg',
          price: 41.99
        }
      ] })
    }
    if(filter.length>0){
      this.setState({books: filter })
    }
  }



  render() {
    return (
      <div className="App">
        <SearchBar getYaSearchOn={this.getYaSearchOn}/>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <h2>Books: Click To Add To Cart</h2>
              </div>
              <div className="row">
                <BookList books={this.state.books} addToCart={this.addToCart}/>
              </div>
            </div>
          <div className="col-6">
            <CartItems cartItemsList={this.state.cartItemsList}/>
            <CartTotal cartItemsList={this.state.cartItemsList}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
