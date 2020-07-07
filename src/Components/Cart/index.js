import React from 'react';
import * as S from './style'

export default function Cart(props) {

  function laodCartItem() {

    const cartItems = JSON.parse(props.addCartItems)
    console.log('cart...')
    if (cartItems.length === 0) {
      return <div className="card-body px-4">Carrinho vazio!</div>
    }
    
    return cartItems.map((pokemon, index) => {
      const { name, price, image } = pokemon
      return (
        <div className="card-body px-4" key={index}>                        
          <div className="media border-bottom py-1">
            <img src={ image } alt={ name } className="mr-3" />
            <div className="media-body">
              <p className="my-0 font-weight-bold">{ name }</p>
              <span className="font-weight-bold text-name-price">{ price }</span>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="col-12 col-lg-4 mb-3 box-cart">
      <div className="card shadow">
        <S.CardHeader className="card-header align-text-middle bg-card-header">
          <span className="font-weight-bold">CARRINHO DE COMPRAS</span>
        </S.CardHeader>
        { laodCartItem() }
        <div className="card-footer text-right">
          <span className="font-weight-bold total-price">Total: R$ 0,00</span>
        </div>
      </div>
    </div>
  )
}