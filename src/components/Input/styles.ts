import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TextInputProps } from "react-native";


export const Container = styled.TextInput.attrs({
    placeholderTextColor: '#969CB3'
})`
    width: 100%;
    height: ${RFValue(56)}px;

    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;

    border-radius: 5px;
    padding: 24px;
    margin-top: 10px;
    
    background: ${({theme}) => theme.COLORS.SHAPE};

`;