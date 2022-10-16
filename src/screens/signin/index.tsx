import { Container, Form, Fields,TypeTransaction } from "./styles";
import React, { useState } from "react";
import { Menu } from "@components/Menu";
import { Input } from "@components/Input";
import { TypeTransactionSelect } from "@components/TypeTransactionSelect";
import { Button } from "@components/Button";

export function SignIn() {

    const [transactionType, setTransactionType] = useState('');

    function handleTransactionsTypeSelect(type : 'up' | 'down')
    {
        setTransactionType(type);
    }

    return (
        <Container>
            <Menu title="Cadastro" />
            <Form>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />
                    <TypeTransaction>
                        <TypeTransactionSelect title="Income" type="up" onPress={() => handleTransactionsTypeSelect('up')} isActive={transactionType === 'up'}/>
                        <TypeTransactionSelect title="Outcome" type="down" onPress={() => handleTransactionsTypeSelect('down')} isActive={transactionType === 'down'}/>
                    </TypeTransaction>
                </Fields>
                <Button />
            </Form>
        </Container>
    )
}