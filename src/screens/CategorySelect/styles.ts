import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity, TouchableOpacityProps } from "react-native";


type CategoryProps = TouchableOpacityProps & {
    isActive : boolean
}


export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
`;


export const Category = styled(TouchableOpacity)<CategoryProps>`
    width: 100%;
    padding: ${RFValue(15)}px;

    flex-direction: row;
    align-items: center;

    ${({theme, isActive}) => isActive && css` background-color: ${theme.COLORS.ORANGE}`};

`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: 16px;

`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;

    background: ${({theme}) => theme.COLORS.TEXT};
`

export const Footer = styled.View`
    width: 100%;
    padding: 24px;
`

