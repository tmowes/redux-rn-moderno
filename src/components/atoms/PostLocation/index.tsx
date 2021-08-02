import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'
import { PostLocationProps } from './types'

export const PostLocation = (props: PostLocationProps) => {
  const { text } = props
  return <Text style={styles.postLocation}>{text}</Text>
}
