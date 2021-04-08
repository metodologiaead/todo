import React, { useMemo } from 'react'
import  { format } from 'date-fns'

import typeIcons from '../../utils/typeicons'

import * as S from './styles'

function TaskCard({ type, title, when, done }) {

  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy' ))
  const hour = useMemo(() => format(new Date(when), 'HH:mm'))

  return (
    <S.Container done={done}>
      <S.TopCard>
        <img src={typeIcons[type]} alt="Ícone de tarefa" />
        <h2>{title}</h2>
      </S.TopCard>
      <S.BottonCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </S.BottonCard>
    </S.Container>
  )
}

export default TaskCard