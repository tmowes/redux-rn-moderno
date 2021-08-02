import React from 'react'
import { FlatList } from 'react-native'

import { styles } from './styles'
import { Post } from '../../organisms/Post'
import { PostsProps } from './types'

export const Posts = (props: PostsProps) => {
  const { data: posts } = props
  return (
    <FlatList
      data={posts}
      style={styles.posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={post => post.id}
      renderItem={({ item }) => <Post data={item} />}
    />
  )
}
