import React, { Component } from 'react';
import './Modal.css';
import { capitalizeFirstLetter } from '../api/api'
import '../res/css/loading.css'


class CardDetail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      "photo_url": "",
      "name": "",
      "types": "",
      "abilities": ""
    };
  }

  componentDidMount() {
    fetch(this.props.url)
    .then(response => response.json())
    .then(data =>{
      this.setState({
        "photo_url": data.sprites.front_default,
        "name": data.name,
        "types": data.types.map(
          t => capitalizeFirstLetter(t.type.name)
        ).join(', '),
        "abilities": data.abilities.map(
          a => capitalizeFirstLetter(a.ability.name)
        ).join(', ')
      });
    })
  }

  render() {
    const { photo_url, name, types, abilities } = this.state;
    if (photo_url !== "" ) {
      return (
        <div className="modal">
          <div className="bg-light-blue dt mw6 center pa3 ma2 br3">
            <div className="dtc v-mid">
              <img alt={ name } src={ photo_url } className="db center mw5"/>
            </div>
            <div className="dtc v-mid pl3">
              <h2 className="h1-poketext black">{capitalizeFirstLetter(name)}</h2>
              <div className="poketext">
                <p>
                  <span className="black-70">Type</span><br/>
                  <span >{types}</span>
                </p>
                <p>
                  <span className="black-70">Abilities</span><br/>
                  <span >{abilities}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="modal">
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      );
    }
  }
}

export default CardDetail;