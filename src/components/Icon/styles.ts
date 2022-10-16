import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { TypeProps } from "@components/FeaturedCard/styles";


export const Icon = styled(Feather) <TypeProps>`
     ${(props) => props.size && css`
        font-size: ${props.size}px;
    `};
    
    ${(props) => props.type === 'up' && css`
        color: ${({ theme }) => theme.COLORS.GREEN};
    `};

    ${(props) => props.type === 'down' && css`
        color: ${({ theme }) => theme.COLORS.RED};
    `};

    ${(props) => props.type === 'total' && css`
        color: ${({ theme }) => theme.COLORS.SHAPE};;
    `};
`;