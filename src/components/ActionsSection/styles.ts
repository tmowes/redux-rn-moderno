import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    align-items: center;
    justify-content: center;
    width: 100%;
  `}
`
export const Text = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.black};
    font-size: 14px;
    padding: 0 20px;
    margin-bottom: 20px;
  `}
`

export const Wrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`
