import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '2px solid rgba(9,72,121,86)', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;