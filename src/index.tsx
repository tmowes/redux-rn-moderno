import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import styled, { css, ThemeProvider } from 'styled-components/native'
import { Provider as ReduxProvider } from 'react-redux'

import * as themes from './styles/themes'
import { Routes } from './routes'
import { store } from './store'

const AppWrapper = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background: ${colors.backgroundColor};
  `}
`

export const AppSrc = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={themes.dark}>
      <NavigationContainer>
        <AppWrapper>
          <Routes />
        </AppWrapper>
      </NavigationContainer>
    </ThemeProvider>
  </ReduxProvider>
)
