import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const Articles = ({ articles }) => {
  const articleElements = articles?.map(articleData => (
    <Article 
      title={articleData.title}
      author={articleData.author}
      description={articleData.description}
      url={articleData.url}
      key={articleData.title}
    />
  ));

  return (
    <div>
      <h1>Articles:</h1>
      {articleElements}
    </div>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Articles;
