import React from 'react';
import './Modal.css';

const CardDetail = ({ url }) => {
  // TODO pass to class and get info from the url
  return (
    <div className="modal">
      <div className="tc pa3 pa5-ns">
        <div className="f6 db link dark-blue hover-blue">
            {url}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;