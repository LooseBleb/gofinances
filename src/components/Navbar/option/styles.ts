import { RFValue } from 'react-native-responsive-fontsize';
import styled,{css} from 'styled-components/native';

export const ContainerOP = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const TitleOP = styled.Text`
    margin-left: ${RFValue(10)}px;
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.TEXT};
    `}
`