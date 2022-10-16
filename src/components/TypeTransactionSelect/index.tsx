import { IconTransaction } from "@components/Icon";
import { type } from "os";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonTypeTransaction, ButtonText } from "./styles";

export type ButtonProps = TouchableOpacityProps & {
    title: string,
    type: "up" | 'down',
    isActive : boolean
}

export function TypeTransactionSelect({ title, type, isActive, ...rest }: ButtonProps) {

    return (
        <ButtonTypeTransaction {...rest} isActive={isActive} type={type}>
            <IconTransaction type={type} size={30} />
            <ButtonText>{title}</ButtonText>
        </ButtonTypeTransaction>
    )
}