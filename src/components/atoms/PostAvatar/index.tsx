import React from 'react'
import { Image } from 'react-native'

import { ProfileIcon } from '../../../styles/icons'
import { styles } from './styles'

export const PostAvatar = () => <Image source={ProfileIcon} style={styles.postAvatar} />
