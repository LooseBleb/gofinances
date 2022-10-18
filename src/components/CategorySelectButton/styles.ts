import styled, {css} from "styled-components/native";
import {Feather} from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";


export const Container = styled(TouchableOpacity).attrs({
    activeOpacity: 0.7
})`
    background-color: ${({ theme })	=> theme.COLORS.SHAPE};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    padding: 18px 16px;
    border-radius: 5px;
`;


export const CategoryTitle = styled.Text`
     ${({ theme })	=> css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${RFValue(14)}px;

     `};
`;

export const Icon = styled(Feather)`
      font-size: ${RFValue(20)}px;
      color: ${({ theme })	=> theme.COLORS.TEXT};
`;
