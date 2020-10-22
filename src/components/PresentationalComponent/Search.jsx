import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ text, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      <label>News Search</label>
      <input
        id="text"
        type="text"
        name="text"
        value={text}
        onChange={onChange}
      />
      <button>Submit</button>
    </form>
  </div>
);

Search.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
