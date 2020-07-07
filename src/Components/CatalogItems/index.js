import React, { useState, useEffect } from 'react'
import { specificPokemon } from '../../services/api'
import * as S from './style'

export default function CatalogItems(property) {

  const { name } = property.data
  const [ pokeImage, setPokeImage ] = useState({})

  useEffect(() => {
    loadDataPokemon(name)
  }, [name])

  async function loadDataPokemon(namePokemon) {
    let image = await specificPokemon(namePokemon).then((res) => res.sprites.front_default)
    setPokeImage(image)
  }

  function addCart() {
    property.addPokeToCart({
      name,
      price: 0, 
      image: pokeImage
    })
  }
  
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card shadow">
        <img className="card-img-top" alt="{ name }" src={ pokeImage } />
        <div className="card-block mt-2 pb-4">
          <S.ProductName>{ name }</S.ProductName>
          <S.ProductPrice>R$ 25,00</S.ProductPrice>
          <S.ProductPayment>
            <span> ou <S.ProductPaymentStrong> 5x</S.ProductPaymentStrong> de <S.ProductPaymentStrong>R$ 5,00</S.ProductPaymentStrong> com juros </span>
          </S.ProductPayment>
          
          <div className="px-3">
            <S.ButtonBuy onClick={addCart}>
              <i className="fa fa-2x fa-shopping-cart" aria-hidden="true"></i> <div>COMPRAR</div>
            </S.ButtonBuy>
          </div>
        </div>
      </div>
    </div>
  )
}