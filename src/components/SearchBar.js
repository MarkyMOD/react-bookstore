import React, { Component } from 'react';

class SearchBar extends Component {

  render() {

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Navbar</a>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onKeyUp={(e)=> this.props.getYaSearchOn(e)}/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
        </form>
      </nav>
    )
  }
}

export default SearchBar
