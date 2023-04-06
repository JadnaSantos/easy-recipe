import * as S from "./styles";
import { TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
