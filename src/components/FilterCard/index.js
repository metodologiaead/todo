import React from 'react'

import filter from '../../assets/filter.png'

import * as S from './styles'

function FilterCard({title, actived}) {
  return (
    <S.Container actived={actived}>
      <img src={filter} alt="Ícone Filtro" />
      <span>{title}</span>
    </S.Container>
  )
}

export default FilterCard