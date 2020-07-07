import React from 'react'
import * as S from './styled'

export default function Footer() {
  return (
    <S.Footer >
      <div className="container">
        <S.Paragraph className="float-right">
          <S.Link href="https://github.com/brunohmduarte/store-pokemon-react/" target="_blank" title="Repositório no Github">
            <i className="fa fa-github" aria-hidden="true"></i>
            </S.Link>
          <S.Link href="https://www.linkedin.com/in/brunohmduarte/" target="_blank" title="Perfil no LinkedIn">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </S.Link>
        </S.Paragraph>
        <S.Paragraph>Copyright 2020 &copy; Loja Pokémon - Todos os direitos reservados.</S.Paragraph>
      </div>
    </S.Footer>
  )
}