import { ReactNode } from 'react'

import { RectButtonProps } from 'react-native-gesture-handler'

export type LabelButtonProps = RectButtonProps & {
  children: ReactNode
}
