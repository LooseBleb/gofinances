import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const Form = styled.View`
    padding: 24px;
    flex: 1;

    justify-content: space-between;
`

export const Fields = styled.View`
`

export const TypeTransaction = styled.View`
    margin-top: 24px;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`