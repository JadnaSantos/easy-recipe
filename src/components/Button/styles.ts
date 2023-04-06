import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) => theme.colors.green[100]};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white[100]};
`
