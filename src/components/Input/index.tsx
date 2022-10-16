import { Container } from "./styles";
import React from "react";
import {TextInputProps} from 'react-native'



export function Input({...rest} : TextInputProps)
{
    return(
        <Container {...rest}>
            
        </Container>
    )
}