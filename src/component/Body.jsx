import React from 'react';
import Item from './Item';

const Body = () => {
  return (
    <div className="container">
      <div className="row">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Body;
