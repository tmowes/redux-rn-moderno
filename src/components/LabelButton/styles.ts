import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    align-items: center;
    justify-content: center;
    background: ${`${colors.shape}`};
    width: 20%;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 20px;
  `}
`

export const Button = styled(RectButton)`
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Label = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
    font-size: 28px;
    text-align: center;
  `}
`
