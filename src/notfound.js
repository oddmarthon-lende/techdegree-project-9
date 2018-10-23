import React from 'react';
import {Consumer} from './Context';

export const NotFound = () => {
  return (
    <Consumer>
      { context =>
        <li className="not-found">
          <h3>No Results Found when searching for {context.searchText}</h3>
          <p>You search did not return any results. Please try again.</p>
        </li>}
    </Consumer>
  );
}
