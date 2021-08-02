import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'
import { PostUsernameProps } from './types'

export const PostUsername = (props: PostUsernameProps) => {
  const { text } = props
  return <Text style={styles.postUsername}>{text}</Text>
}
