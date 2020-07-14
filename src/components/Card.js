import React, { Component } from 'react';
import CardDetail from './CardDetail';
import Modal from './Modal';

class Card extends Component {
  constructor (props) {
    super(props);
    this.state = {
      'show_detail': false
    };
    this.showDetail = this.showDetail.bind(this);
    this.closeDetail = this.closeDetail.bind(this);
  }

  showDetail() {
    this.setState({
      'show_detail': true
    });
  }

  closeDetail() {
    this.setState({
      'show_detail': false
    });
  }

  render() {
    const { pokemon_number, url, name } = this.props;
    const { show_detail } = this.state;

    const modal = show_detail ? (
      <Modal>
        <div onClick={this.closeDetail}>
          <CardDetail url={url}/>
        </div>
      </Modal>
    ) : null;

    return (
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <div id={pokemon_number} onClick={this.showDetail}>
          <h2>{name}</h2>
          <p>{pokemon_number + 1}</p>
        </div>
        {modal}
      </div>
    );
    
  }
}

export default Card;