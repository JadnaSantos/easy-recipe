import * as S from './styles';
import { TextInputProps } from 'react-native'

type InputProps = TextInputProps & {
  value: string
}

export function Input({ value, ...rest }: InputProps) {
  return (
    <S.Container
      placeholderTextColor='#6C6C80'
      {...rest}
    />
  )
}
