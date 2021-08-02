import React from 'react'

import { BorderlessButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import { IconButtonProps } from './types'

export const IconButton = (props: IconButtonProps) => {
  const { icon: Icon, ...attrs } = props
  return (
    <BorderlessButton style={styles.postOptionsIcon} {...attrs}>
      <Icon />
    </BorderlessButton>
  )
}
