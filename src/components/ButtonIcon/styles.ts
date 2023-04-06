import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import styled from 'styled-components/native'


export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
`

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.green[50]}
`


