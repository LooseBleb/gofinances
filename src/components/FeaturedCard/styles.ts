import styled, { css } from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';


export interface TypeProps {
    size: number | undefined;
    type: 'up' | 'down' | 'total';
}


export const Container = styled.View<TypeProps>`
    width: ${RFValue(300)}px;
    height: ${RFPercentage(30)}px;

    margin-right: 15px;
    padding: 24px;
    border-radius: 8px;

    ${(props) => props.type === 'total' ? css`
        background: ${({ theme }) => theme.COLORS.ORANGE};
    ` : css`
        background: ${({ theme }) => theme.COLORS.SHAPE};
    `};

`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;


export const Title = styled.Text<TypeProps>`
    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        ${type === 'total' ? css`color: ${theme.COLORS.SHAPE };` 
        : css` color: ${theme.COLORS.TITLE };`
        };
    `};
`;

export const Content = styled.View`
    flex: 1;

    justify-content: center;
`;

export const TextValue = styled.Text<TypeProps>`
    ${({ theme, type }) => css`
        font-size: 32px;
        font-family: ${theme.FONT_FAMILY.MEDIUM};

        ${type === 'total' ? css`color: ${theme.COLORS.SHAPE };` 
        : css` color: ${theme.COLORS.TITLE };`
        };
    `};
`;

export const TextDate = styled.Text<TypeProps>`
    ${
    ({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};;
        ${type === 'total' ? css`color: ${theme.COLORS.SHAPE };` 
        : css` color: ${theme.COLORS.TEXT };`
        };
    `};
`;




