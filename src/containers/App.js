import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestPokemons } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';
import '../res/css/loading.css'

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchPokemons.searchField,
    pokemons: state.requestPokemons.pokemons,
    isPending: state.requestPokemons.isPending
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestPokemons: () => dispatch(requestPokemons())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestPokemons();
  }

  render() {
    const { pokemons, searchField, onSearchChange, isPending } = this.props;
    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className='tc'>
        <div className='appTitle'>PokéApp</div>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> :
            <ErrorBoundry>
              <CardList pokemons={filteredPokemons} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)
