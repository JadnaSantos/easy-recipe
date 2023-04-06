import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background: ${({ theme }) => theme.colors.white[50]};

  border-radius: 6px;
  padding: 16px;
`;

