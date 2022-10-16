import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';


export type TypeProps = {
    type: 'incoming' | 'outcome';
}

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(150)}px;

    padding: 24px;

    margin-top: 15px;
    border-radius: 5px;

    background: ${({theme}) => theme.COLORS.SHAPE};
`

export const TitleTransaction = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.MEDIUM};
        color: ${theme.COLORS.TITLE};
    `}
`;

export const TransactionValue = styled.Text<TypeProps>`
     ${({theme, type}) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.MEDIUM};
        color: ${type === 'incoming' ? theme.COLORS.GREEN : theme.COLORS.RED};
    `}
`;


export const TransactionInfo = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const DivIcon = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`;      

export const TransactionType = styled.Text`
     ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.TEXT}
    `}

    margin-left: ${RFValue(10)}px
`;