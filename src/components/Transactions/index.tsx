import { Container, TitleTransaction, TransactionInfo, TransactionType, TransactionValue, DivIcon } from "./styles";
import React from "react";
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';


interface Category {
    name: string;
    icon: string
}

export type Transaction = {
    name: string;
    price: string;
    category: Category;
    date: string;
    type: 'incoming' | 'outcome';
}


type TransactionProps = {
    transaction: Transaction
}

export function Transaction({ transaction }: TransactionProps) {
    return (
        <Container>
            <TitleTransaction>{transaction.name}</TitleTransaction>
            <TransactionValue type={transaction.type}>{transaction.type === 'outcome' && '- '}R$ {transaction.price}</TransactionValue>
            <TransactionInfo>
                <DivIcon>
                    <Feather name="power" size={20} />
                    <TransactionType>{transaction.category.name}</TransactionType>
                </DivIcon>
                <TransactionType>{transaction.date}</TransactionType>
            </TransactionInfo>
        </Container>
    )
}