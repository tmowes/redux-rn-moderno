import React from 'react'
import { View } from 'react-native'

import { PostDescription } from '../../atoms/PostDescription'
import { PostPhoto } from '../../atoms/PostPhoto'
import { PostAbout } from '../../molecules/PostAbout'
import { PostHeader } from '../../molecules/PostHeader'
import { PostOptions } from '../../molecules/PostOptions'
import { styles } from './styles'
import { PostProps } from './types'

export const Post = (props: PostProps) => {
  const {
    data: { cover, lastLiked, likes, description, username, location },
  } = props
  return (
    <View style={styles.post}>
      <PostHeader data={{ username, location }} />
      <PostPhoto cover={cover} />
      <View style={styles.postFooter}>
        <PostOptions />
        <PostAbout data={{ lastLiked, likes }} />
        <PostDescription text={description} />
      </View>
    </View>
  )
}
