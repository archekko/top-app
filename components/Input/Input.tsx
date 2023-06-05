import { InputProps } from "./Input.props";
import styles from './Input.module.css';
import cn from 'classnames';
import SearchIcon from './searchIcon.svg';
import { ForwardedRef, forwardRef } from "react";

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
    <div className={cn(className, styles.wrapper)}>
        <input ref={ref} className={cn(styles.input, {
            [styles.error]: error
        })} {...props}/>
        {error && <span className={styles.errorMess}>{error.message}</span>}
    </div>
    );
});