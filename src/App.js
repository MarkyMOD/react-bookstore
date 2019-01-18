import React, { Component } from 'react';
import Book from './components/Book'

class App extends Component {
  state = {
    books: [
      {
        id: 1,
        title: 'JavaScript, The Good Parts',
        author: 'Douglas Crockford',
        pages: "2",
        inCart: false,
        coverUrl: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/284/javascript_the_good_parts.jpg'
      },
      {
        id: 2,
        title: 'Learning React Native',
        author: 'Bonnie Eisenman',
        pages: "48",
        inCart: false,
        coverUrl: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/287/learning_react_native.jpg'
      },
      {
        id: 3,
        title: 'Functional JavaScript',
        author: 'Michael Fogus',
        pages: "147",
        inCart: false,
        coverUrl: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/297/functional_javascript.jpg'
      },
      {
        id: 4,
        title: 'React: Up & Running',
        author: 'Stoyan Stefanov',
        pages: "36",
        inCart: false,
        coverUrl: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/294/react_up_and_running.jpg'
      }
    ]

  }


  render() {
    return (
      <div className="App">
      <h2>Books</h2>
        <Book book={this.state.books}/>
      </div>
    );
  }
}

export default App;
