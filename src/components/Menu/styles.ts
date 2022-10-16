import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    height: ${RFPercentage(20)}px;

    background: ${({theme}) => theme.COLORS.BLUE};
    align-items: center;
    justify-content: flex-end;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.SHAPE}
    `}

    margin-bottom: ${RFValue(25)}px;
`