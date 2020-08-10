import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

export default function Quotes(props) {
  return props.quotes.map((quote) => (
    <Quote quote={ quote.quote } />
  ));
}

// PropTypes
Quotes.propTypes = {
  todos: PropTypes.object.isRequired
}
