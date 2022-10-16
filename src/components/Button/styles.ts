import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: ${RFValue(50)}px;

    justify-content: center;
    align-items: center;

    background: ${({theme}) => theme.COLORS.ORANGE};
    border-radius: 5px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.MEDIUM};
        color: ${theme.COLORS.SHAPE};
    `}
`;