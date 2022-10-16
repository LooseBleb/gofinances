import React from "react";
import { ContainerOP, TitleOP } from "./styles";
import {Feather } from '@expo/vector-icons';

type Props = {
    title: string
}

export function Option({title} : Props)
{
    return(
        <ContainerOP>
            <Feather name="list" size={24} color={'#969CB2'}/>
            <TitleOP>{title}</TitleOP>
        </ContainerOP>
    )
}