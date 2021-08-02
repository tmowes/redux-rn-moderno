import React from 'react'

import * as S from './styles'
import { LabelButtonProps } from './types'

export const LabelButton = (props: LabelButtonProps) => {
  const { children, ...attrs } = props
  return (
    <S.Container>
      <S.Button {...attrs}>
        <S.Label>{children}</S.Label>
      </S.Button>
    </S.Container>
  )
}
