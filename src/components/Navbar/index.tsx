import { Container } from "./styles";
import React from "react";
import { Option } from "./option";

export function Navbar()
{
    return(
        <Container>
            <Option title="Listagem"/>
            <Option title="Cadastrar"/>
            <Option title="Resumo"/>
        </Container>
    )
}