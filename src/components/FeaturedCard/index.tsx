import { Container, Header, Title, Content, TextValue, TextDate, TypeProps } from './styles';
import React from "react";
import { IconTransaction } from '@components/Icon';

type Props = TypeProps & {
    title: string;
    amount: string;
    lastTransaction : string;
}

export function FeaturedCard({title, amount, lastTransaction, type} : Props) {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>
                    {title}
                </Title>
                <IconTransaction type={type} size={45}/>
            </Header>
            <Content>
                <TextValue type={type}>R$ {amount}</TextValue>
                <TextDate type={type}>Última entrada dia {lastTransaction}</TextDate>
            </Content>
        </Container>
    )
}