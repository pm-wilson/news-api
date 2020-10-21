import React from 'react';
import PropTypes from 'prop-types';
import Article from './Articles';

const Articles = ({ articles }) => (
  <div>
    {articles.map(() => {
      <Article title={articles.title} 
        author={articles.author} 
        description={articles.description} 
        url={articles.url}
      />;
    })}
  </div>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(),
};

export default Articles;
