import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white[100]};

  padding-top: 36;
`;

export const Content = styled.View`
  padding: 20px;

  padding-top: ${Platform.OS === 'android' ? 70 : 0}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;


  color: ${({ theme }) => theme.colors.primary[50]};

`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.fonts.text[10]} ;
`;
