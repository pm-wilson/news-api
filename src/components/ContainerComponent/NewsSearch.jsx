import React, { Component } from 'react';
import Articles from '../PresentationalComponent/Articles';
import Search from '../PresentationalComponent/Search';
import { getNews } from './getNews-api';

class NewsSearch extends Component {
  state = {
    text: '',
    articles: [],
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    getNews(this.state.text)
      .then(data => {
        this.setState({ articles: data.articles });
      });
  }
  
  render() {
    return (
      <div>
        <Search 
          text={this.state.text} 
          onChange={this.handleChange} 
          onSubmit={this.handleSubmit}
        />
        <Articles 
          articles={this.state.articles}
        />
      </div>
    );
  }
}

export default NewsSearch;
