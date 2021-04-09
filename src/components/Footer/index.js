import React from 'react'
import logo from '../../assets/logo-one-light.png'

import * as S from './styles'

function Footer() {
  return (
    <S.Container>
      <span>ToDo - Organizando sua vida - by:</span>
      <a href="https://bellmontsistema.com.br/" target="_blanck">
      <img src={logo} alt="Logo Bellmont Sistema" />
      </a>
    </S.Container>
  )
}

export default Footer