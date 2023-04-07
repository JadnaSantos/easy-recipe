import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  padding: 10px;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`;

export const Subtitle = styled.Text`
  margin-bottom: 30px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `};
`;
