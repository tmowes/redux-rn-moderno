import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from './styles'
import { PostPhotoProps } from './types'

export const PostPhoto = (props: PostPhotoProps) => {
  const { cover } = props
  return <Image source={cover} style={styles.cover} />
}
