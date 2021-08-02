import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'
import { PostLikesProps } from './types'

export const PostLikes = (props: PostLikesProps) => {
  const { text } = props
  return <Text style={styles.likes}>{text}</Text>
}
