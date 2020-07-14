import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_POKEMONS_PENDING,
  REQUEST_POKEMONS_SUCCESS,
  REQUEST_POKEMONS_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestPokemons = () => (dispatch) => {
  dispatch({ type: REQUEST_POKEMONS_PENDING })
  apiCall('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
    .then(data => dispatch({ type: REQUEST_POKEMONS_SUCCESS, payload: data.results }))
    .catch(error => dispatch({ type: REQUEST_POKEMONS_FAILED, payload: error }))
}