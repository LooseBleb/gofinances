import { Container, CategoryTitle, Icon } from "./styles";
import React from 'react';
import { TouchableOpacityProps } from "react-native";
import { Category } from "@screens/CategorySelect";

type Props = TouchableOpacityProps & {
    title : string;
    category : Category | undefined
}

export function CategorySelectButton({title, ...rest} : Props)
{
    return (
        <Container {...rest}>
            <CategoryTitle>{title}</CategoryTitle>
            <Icon name="chevron-down"/>
        </Container>
    )
}