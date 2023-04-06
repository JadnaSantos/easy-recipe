import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white[100]};

  padding: 24px;
`;

export const Content = styled.View`
  padding: 10px;

  padding-top: ${Platform.OS === 'android' ? 70 : 0}px;
`;


export const Logo = styled.Image`
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.fonts.text[10]} ;
`;

export const Form = styled.View`
  padding: 10px;
  width: 100%;

  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`
