import React, { useState } from 'react'

import { ActionsSection } from '../../components/ActionsSection'
import { Counter } from '../../components/Counter'
import * as S from './styles'

export const Redux = () => (
  <S.Container>
    <S.Title>Redux</S.Title>
    <S.Wrapper>
      <Counter />
      <ActionsSection />
    </S.Wrapper>
  </S.Container>
)
