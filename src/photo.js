import React from 'react';
import PropTypes from 'prop-types';

export const Photo = (props) => {
  return (
    <li>
      <img src={props.src} alt="" />
    </li>
  );
}

Photo.propTypes = {
  src: PropTypes.string.isRequired
}
