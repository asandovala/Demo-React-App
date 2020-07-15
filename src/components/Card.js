import React, { Component } from 'react';
import CardDetail from './CardDetail';
import Modal from './Modal';
import logo from '../res/img/pokeicon.png';
import { capitalizeFirstLetter } from '../api/api'

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
      <div className='dib'>
        <div id={pokemon_number} onClick={this.showDetail} className='dib'>
          <div className='tc grow br3 pa3 ma2 dib bw2' style={{ maxWidth: 200 }}>
            <img src={logo} alt={pokemon_number + 1} className="dib"/><br/>
            <div className='bg-light-green br3 pa2 dib poketext'>
              <span>{capitalizeFirstLetter(name)}</span>
            </div>
          </div>
        </div>
        {modal}
      </div>
    );
    
  }
}

export default Card;