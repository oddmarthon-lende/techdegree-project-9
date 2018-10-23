import React from 'react';
import {NavLink} from 'react-router-dom';
import {Consumer} from './Context';

export const MainNav = () => {
  return (
    <Consumer>
      { context => {
        return (
          <nav className="main-nav">
            <ul>
              { context.defaultTags.map( (tag, i) => <li key={i} ><NavLink to={`/search/${tag}`}>{tag}</NavLink></li>)}
            </ul>
          </nav>
        );
      }}
    </Consumer>
  );
}
