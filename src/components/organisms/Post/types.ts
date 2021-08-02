import { ImageRequireSource } from 'react-native'

export type PostProps = {
  data: Post
}

export type Post = {
  id: string
  username: string
  location: string
  likes: string
  cover: ImageRequireSource
  description: string
  lastLiked: Profile
}

export type Profile = {
  id: string
  name: string
  avatar: ImageRequireSource
}
