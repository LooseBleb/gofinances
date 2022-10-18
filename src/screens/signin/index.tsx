import { Container, Form, Fields,TypeTransaction } from "./styles";
import React, { useState } from "react";
import { Menu } from "@components/Menu";
import { Input } from "@components/Input";
import { TypeTransactionSelect } from "@components/TypeTransactionSelect";
import { Button } from "@components/Button";
import { CategorySelectButton } from "@components/CategorySelectButton";
import { Modal } from 'react-native'
import { Category, CategorySelect } from "@screens/CategorySelect";

export function SignIn() {

    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [category, setCategory] = useState<Category>();

    function handleTransactionsTypeSelect(type : 'up' | 'down')
    {
        setTransactionType(type);
    }

    function handleCloseSelectCategoryModal()
    {
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategoryModal()
    {
        setCategoryModalOpen(true);
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
                    <CategorySelectButton  title={category ? category.name : 'Selecione uma categoria'} category={category} onPress={handleOpenSelectCategoryModal} />
                </Fields>
                <Button title="Enviar" onPress={() => console.log(category)}/>
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect category={category} setCategory={setCategory} closeSelectCategory={handleCloseSelectCategoryModal}/>
            </Modal>
        </Container>
    )
}