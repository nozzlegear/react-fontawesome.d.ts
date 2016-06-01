/// <reference path="./typings/index.d.ts" />

import * as React from "react";

declare interface IProps extends React.Props<any>
{
    className?: string;
    
    name: string;
    
    size?: "lg" | "2x" | "3x" | "4x" | "5x"
    
    spin?: boolean;
    
    style?: React.CSSProperties; 
}

declare class FontAwesome extends React.Component<IProps, any>
{
    
}

export = FontAwesome;
