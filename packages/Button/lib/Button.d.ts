import * as React from 'react';
import './Button.css';
export interface Props {
    children?: React.ReactNode;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}
export declare const MyBtn: () => any;
export declare const Button: React.FunctionComponent<Props>;
