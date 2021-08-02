import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'
import { PostLikedAvatarProps } from './types'

export const PostLikedAvatar = (props: PostLikedAvatarProps) => {
  const { avatar } = props
  return <Image source={avatar} style={styles.lastLiked} />
}
