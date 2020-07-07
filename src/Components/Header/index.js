import React, { useState } from 'react'
import * as api from '../../services/api'
import * as S from './style'
import logo from '../../logo.png'

export default function Header(props) {

  const [ search, setSearch ] = useState('')

  async function handleSearch() {
    if (search === '') {
      return;
    }

    const searchPokemon = await api.allPokemon(search).then((response) => response.results)
    const newSearch = searchPokemon.filter((pokemon) => (pokemon.name.indexOf(search) >= 0))
    
    props.resultSearch(newSearch)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom mb-5 shadow">
      <a className="navbar-brand" href="https://lojadopokemon.netlify.app/">
        <img src={ logo } alt="Logo marca" width="80%" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse text-right" id="navbarSupportedContent">
        <form className="ml-auto" action="#" method="get" id="frmSearch" name="frmSearch">
          <div className="input-group">
            <S.Input type="search" className="form-control" value={ search } size="40" placeholder="O que você procura?" onChange={e => setSearch(e.target.value)} />
            <div className="input-group-append">
              <S.Button className="btn btn-warning" type="button" onClick={handleSearch}>
                <i className="fa fa-search" aria-hidden="true"></i>
              </S.Button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  )
}