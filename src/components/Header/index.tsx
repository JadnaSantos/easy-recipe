import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'



type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <S.Container>
      {
        showBackButton &&
        <S.BackButton onPress={handleGoBack}>
          <Ionicons name='arrow-back-outline' color='#ffffff' />
        </S.BackButton>
      }
    </S.Container>
  )
}
