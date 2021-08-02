import React from 'react'

import { useReduxSelector } from '../../hooks'
import { selectCounterValue } from '../../store/slices/counter/selectors'
import * as S from './styles'

export const Counter = () => {
  const { value } = useReduxSelector(selectCounterValue)
  return (
    <S.Container>
      <S.Title>{`${value}`.padStart(2, '0')}</S.Title>
    </S.Container>
  )
}
