import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { TouchableOpacityProps, TouchableOpacity } from "react-native";


type ButtonProps = TouchableOpacityProps & {
    type: 'up' | 'down',
    isActive : boolean
}

export const ButtonTypeTransaction = styled(TouchableOpacity)<ButtonProps>`
    flex-direction: row;
    justify-content:center;
    align-items: center;
   
    width: 49%;
    height:  ${RFValue(60)}px;

    margin-bottom: 16px;
    
    border-radius: 5px;
    
    border: 1px solid black;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.TITLE};
    `};

    ${({ isActive, type }) => isActive && type == 'down' && css`
        background: #F6DBE0;
        border: 0.5px;
    `};

    ${({ isActive, type }) => isActive && type == 'up' && css`
        background: #D7F4D5;
        border: 0.5px;
    `};
`;

export const ButtonText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.TITLE};
    `};
    margin-left: 10px
`;