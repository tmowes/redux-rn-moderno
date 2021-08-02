import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    align-items: center;
    justify-content: center;
  `}
`
export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
    font-size: 32px;
  `}
`
