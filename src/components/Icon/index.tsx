import React from "react";
import { Icon } from "./styles";

export const icon = {
    up : 'arrow-up-circle',
    down : 'arrow-down-circle',
    total : 'dollar-sign',
}

type IconProps = {
    type : 'up' | 'down' | 'total';
    size: number | undefined;
}

export function IconTransaction({type, size} : IconProps)
{
    return(
        <Icon name={icon[type]} type={type} size={size}/>
    )
}