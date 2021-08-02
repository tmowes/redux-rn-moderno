import React from 'react'
import { StatusBar } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'
import { AppRoutesProps } from './types'

const { Navigator, Screen } = createStackNavigator<AppRoutesProps>()

export const AppRoutes = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    <Navigator headerMode="none">
      <Screen name="Redux" component={P.Redux} />
      <Screen name="Onboarding" component={P.Onboarding} />
      <Screen name="Home" component={P.Home} />
    </Navigator>
  </>
)
