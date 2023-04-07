import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context'


export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 24px;
`;


export const Logo = styled.Image`
  margin-bottom: 16px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  flex-direction: row;
  justify-content: center;

  border-radius: 6px;

`
