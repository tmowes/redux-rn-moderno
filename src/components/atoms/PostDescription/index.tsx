import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'
import { PostDescriptionProps } from './types'

export const PostDescription = (props: PostDescriptionProps) => {
  const { text } = props
  return <Text style={styles.description}>{text}</Text>
}
