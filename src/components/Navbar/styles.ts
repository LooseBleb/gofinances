import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    height: ${RFPercentage(10)}px;

    padding: 15px 10px;

    align-items: baseline;
    justify-content: space-between;
    flex-direction: row;

    background: ${({theme}) => theme.COLORS.SHAPE};
`