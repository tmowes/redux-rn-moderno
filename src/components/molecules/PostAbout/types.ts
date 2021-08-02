import { Post } from '../../organisms/Post/types'

export type PostAboutProps = {
  data: Pick<Post, 'lastLiked' | 'likes'>
}
