import React, { Component } from 'react';
import Articles from '../PresentationalComponent/Articles';
import Search from '../PresentationalComponent/Search';
import { getNews } from '../../services/getNews-api';
import Loading from './Loading';

class NewsSearch extends Component {
  state = {
    text: '',
    articles: [],
    loading: false,
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  handleSubmit = (e) => {
    const randomLoadTime = Math.floor(Math.random() * 1000) + 500;

    e.preventDefault();

    this.setState({ loading: true });
    setTimeout(() => {
      getNews(this.state.text)
        .then(data => {
          this.setState({ articles: data.articles });
        });

      this.setState({ loading: false });
    }, randomLoadTime);
  }
  
  render() {
    return (
      <div>
        <Search 
          text={this.state.text} 
          onChange={this.handleChange} 
          onSubmit={this.handleSubmit}
        />
        {this.state.loading ? <Loading /> : <Articles articles={this.state.articles} />}
      </div>
    );
  }
}

export default NewsSearch;
