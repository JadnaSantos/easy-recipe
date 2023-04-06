import { TouchableOpacityProps } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import * as S from './styles'

type Props = TouchableOpacityProps & {
  name: keyof typeof Ionicons.glyphMap
}

export function ButtonIcon({ name, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon name={name} />
    </S.Container>
  )
}
