import React, { useState, useEffect } from 'react';
import Catalog from '../Catalog/index';
import Cart from '../Cart/index';
import Footer from '../Footer';

export default function Content(props) {

  const arrayTeste = []
  const [ searchList, setSearchList ] = useState([])

  useEffect(() => {
    setSearchList(props.searchList)
  }, [props.searchList])

  function getInfoPokemon(data) {    
    arrayTeste.push(data)
    localStorage.setItem("itemCart", JSON.stringify(arrayTeste))
  }

  function cartItems() {
    // return JSON.parse(localStorage.getItem('itemCart'))
    // console.log('Content::cartItems', localStorage.getItem('itemCart'))
    return localStorage.getItem('itemCart')
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <Catalog searchList={searchList} getInfoPokemon={getInfoPokemon.bind(this)} />

          <Cart addCartItems={cartItems()} />
        </div>
      </div>

      <Footer />
    </>
  )
}