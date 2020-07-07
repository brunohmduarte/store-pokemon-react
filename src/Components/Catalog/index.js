import React, { useEffect, useState } from 'react'
import CatalogItems from '../CatalogItems/index'
import { allPokemon } from '../../services/api'

export default function Catalog(props) {

  const limit = 12
  const [ offset, setOffset ] = useState(0)
  const [ allData, setAllData ] = useState([])

  useEffect(() => {
    (props.searchList.length === 0) ? loadPokemon(limit, offset) : setAllData(props.searchList)
  }, [offset, props.searchList])

  async function loadPokemon(limit, offset) {
    setOffset(0)
    let data = await allPokemon(limit, offset).then((response) => response.results)
    setAllData(data)
  }

  function addPokeToCart(event) {
    props.getInfoPokemon(event)
  }

  return (
    <div className="col-12 col-lg-8 box-catalog">
      <div className="row">
        {
          allData.map((pokemon, index) => {
            return (
              <CatalogItems data={pokemon} addPokeToCart={addPokeToCart.bind(this)} key={index} />
            )
          })
        }
          
      </div>
    </div>
  )
}