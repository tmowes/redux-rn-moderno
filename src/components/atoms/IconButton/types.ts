import { FC } from 'react'

import { BorderlessButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

export type IconButtonProps = BorderlessButtonProps & {
  icon: FC<SvgProps>
}
