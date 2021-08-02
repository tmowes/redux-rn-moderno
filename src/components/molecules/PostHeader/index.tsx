import React from 'react'
import { View } from 'react-native'

import { PostAvatar } from '../../atoms/PostAvatar'
import { PostLocation } from '../../atoms/PostLocation'
import { PostUsername } from '../../atoms/PostUsername'
import { styles } from './styles'
import { PostHeaderProps } from './types'

export const PostHeader = (props: PostHeaderProps) => {
  const {
    data: { username, location },
  } = props
  return (
    <View style={styles.postHeader}>
      <PostAvatar />
      <View>
        <PostUsername text={username} />
        <PostLocation text={location} />
      </View>
    </View>
  )
}
