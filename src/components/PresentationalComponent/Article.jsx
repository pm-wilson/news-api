import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description, url }) => (
  <div href={url} target="_blank">
    <h3>{title}</h3>
    <span>by {author}</span>
    <p>{description}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Article;
