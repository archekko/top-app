import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TsizeProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 'text_16' | 'text_14' | 'text_12';
    children: ReactNode;
}