import React from 'react'
import { View } from 'react-native'

import {
  CommentIcon,
  FavoriteIcon,
  MessengerIcon,
  SaveIcon,
} from '../../../styles/icons'
import { IconButton } from '../../atoms/IconButton'
import { styles } from './styles'

export const PostOptions = () => (
  <View style={styles.postOptions}>
    <View style={styles.postOptionsSide}>
      <IconButton icon={FavoriteIcon} />
      <IconButton icon={CommentIcon} />
      <IconButton icon={MessengerIcon} />
    </View>
    <IconButton icon={SaveIcon} />
  </View>
)
