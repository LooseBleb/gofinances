import { Container, Title } from "./styles";
import React from "react";

type MenuProps = {
    title : string
}

export function Menu({title} : MenuProps)
{
    return(
        <Container>
            <Title>{title}</Title>
        </Container>

    )
}