import React from 'react'
import { View } from 'react-native'

import { PostLikedAvatar } from '../../atoms/PostLikedAvatar'
import { PostLikes } from '../../atoms/PostLikes'
import { styles } from './styles'
import { PostAboutProps } from './types'

export const PostAbout = (props: PostAboutProps) => {
  const {
    data: { lastLiked, likes },
  } = props
  return (
    <View style={styles.postAbout}>
      <PostLikedAvatar avatar={lastLiked.avatar} />
      <PostLikes text={likes} />
    </View>
  )
}
