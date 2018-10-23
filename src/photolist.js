import React from 'react';
import {Photo} from './photo';
import {Consumer} from './Context';

export const PhotoList = () => {

  return (
    <Consumer>
      { context =>
        <div className="photo-container">
          {context.photos.length ? <h2>Results</h2> : <React.Fragment />}
          <ul>
            { context.photos.map((photo, i) => <Photo key={i} src={photo.src} />) }
          </ul>
        </div>}
    </Consumer>
  );
}
