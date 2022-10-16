import { View, Text } from "react-native";
import {
    Container,
    Header,
    UserImg,
    UserInfo,
    Profile,
    TextGreetings,
    TextUserName,
    IconPower,
    ListFeaturedCards,
    ListTransactions,
    ListTransactionsTitle
} from "./styles"
import React, { useState } from "react";
import { FeaturedCard } from "@components/FeaturedCard";
import { Transaction } from "@components/Transactions";
import { Menu } from "@components/Menu";

const profile = require('@assets/fim.png')

export function Dashboard() {

    const [transactions, setTransactions] = useState<Transaction[]>([{name: 'Desenvolvimento de site', price: '12.000,00', category : {name: 'Vendas', icon: 'power'}, date: '10/10/2022', type: 'incoming'},{name: 'Café da manha', price: '15.00', category: { name: 'Alimentação', icon: 'power'}, date: '10/10/2022', type: 'outcome'}])

    return (
        <Container>
            <Header>
                <UserInfo>
                    <Profile>
                        <UserImg source={profile} />
                        <View>
                            <TextGreetings>
                                Olá,
                            </TextGreetings>
                            <TextUserName>
                                Yago
                            </TextUserName>
                        </View>
                    </Profile>
                    <IconPower />
                </UserInfo>
            </Header>
            <ListFeaturedCards>
                <FeaturedCard type="up" title="Entrada" amount="15.000,00" lastTransaction="10 de outubro" />
                <FeaturedCard type="down" title="Saida" amount="15.000,00" lastTransaction="10 de outubro" />
                <FeaturedCard type="total" title="Total" amount="15.000,00" lastTransaction="10 de outubro" />
            </ListFeaturedCards>

            <ListTransactionsTitle>Listagem</ListTransactionsTitle>
            <ListTransactions>
                {transactions.map((transaction) => (
                    <Transaction key={transaction.name} transaction={transaction} />
                ))}
            </ListTransactions>
        </Container>
    )
}