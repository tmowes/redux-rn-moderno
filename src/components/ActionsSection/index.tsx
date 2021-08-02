import React from 'react'

import { useReduxDispatch } from '../../hooks'
import {
  decrementCounter,
  incrementCounter,
  randomIncCounter,
  resetCounter,
} from '../../store/slices/counter'
import { LabelButton } from '../LabelButton'
import * as S from './styles'

export const ActionsSection = () => {
  const dispatch = useReduxDispatch()
  const increment = () => dispatch(incrementCounter())
  const decrement = () => dispatch(decrementCounter())
  const reset = () => dispatch(resetCounter())
  const random = () => {
    const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    dispatch(randomIncCounter({ value: randomNumber }))
  }

  return (
    <S.Container>
      <S.Wrapper>
        <LabelButton onPress={decrement}>-</LabelButton>
        <LabelButton onPress={reset}>#</LabelButton>
        <LabelButton onPress={random}>@</LabelButton>
        <LabelButton onPress={increment}>+</LabelButton>
      </S.Wrapper>
    </S.Container>
  )
}
