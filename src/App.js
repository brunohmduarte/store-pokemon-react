import React, { useState } from 'react'
import Header from './Components/Header/index'
import Content from './Components/Content/index'

function App() {

  const [ newPokemonList, setNewPokemonList ] = useState([])

  function resultSearch(pokemons) {
    setNewPokemonList(pokemons)
  }

  return (
    <>
      <Header resultSearch={resultSearch.bind(this)} />

      <Content searchList={newPokemonList} />
    </>
  )
}

export default App
