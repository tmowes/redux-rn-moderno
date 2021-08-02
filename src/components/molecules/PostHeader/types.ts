import { Post } from '../../organisms/Post/types'

export type PostHeaderProps = {
  data: Pick<Post, 'username' | 'location'>
}
