import styled, { css } from 'styled-components/native';
import { TouchableOpacity, Text, Image, View } from "react-native";

export const Container = styled(TouchableOpacity)`
  margin-bottom: 14px;
`;

export const Content = styled(View)`
  position: absolute;
  bottom: 14px;
  left: 14px;
  z-index: 999;
`;

export const NameRecipe = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const DescriptionRecipe = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

