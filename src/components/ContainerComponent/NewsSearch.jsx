import React, { Component } from 'react';

class NewsSearch extends Component {
  render() {
    return (
      <div>
        <Search />
        <Articles />
      </div>
    );
  }
}

export default NewsSearch;