import * as S from './styles'
import { Image } from "react-native";
import { ListProps } from '../../types';
import { LinearGradient } from 'expo-linear-gradient'

function List({
  id,
  cover,
  name,
  total_ingredients,
  time, ...rest
}: ListProps) {
  return (
    <S.Container {...rest}>
      <Image
        source={{ uri: cover }}
        style={{
          width: '100%',
          height: 200,
          borderRadius: 14
        }}
      />

      <S.Content>
        <S.NameRecipe>{name}</S.NameRecipe>
        <S.DescriptionRecipe>{total_ingredients} ingredientes | {time}</S.DescriptionRecipe>
      </S.Content>
    </S.Container>
  );
}

export { List }
