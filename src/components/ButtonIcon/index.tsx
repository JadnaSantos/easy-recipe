import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import * as S from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: string
}

export function ButtonIcon({ icon, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon
        name={icon}
      />
    </S.Container>
  );
}
