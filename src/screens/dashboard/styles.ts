import styled, { css } from 'styled-components/native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const Header = styled.View`
    height: ${RFPercentage(40)}px;
    padding: 0px 24px;
    background: ${({ theme }) => theme.COLORS.BLUE};
    
`
export const UserInfo = styled.View`
    width: 100%;

    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Profile = styled.View`
    flex-direction: row;
`;

export const UserImg = styled.Image`
    margin-right: 15px;

    width: ${RFValue(48)}px ;
    height:${RFValue(48)}px ;

    border-radius: 10px;
`

export const TextGreetings = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.SHAPE};
    `}
`

export const TextUserName = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.SHAPE};
    `}
`;

export const ListFeaturedCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const ListTransactions = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    margin-top: 16px;
`;

export const ListTransactionsTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.MEDIUM};
        color: ${theme.COLORS.TITLE};
    `}

    padding: 0 24px;
    margin-top: ${RFPercentage(14)}px;
`

export const IconPower = styled(Ionicons).attrs(({ theme }) => ({
    name: 'power',
    size: 30,
    color: theme.COLORS.ORANGE
}))``;