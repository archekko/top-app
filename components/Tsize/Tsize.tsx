import { TsizeProps } from "./Tsize.props";
import styles from './Tsize.module.css';
import cn from 'classnames';

export const Tsize = ({ size, children, className, ...props }: TsizeProps): JSX.Element => {
    return <>
        <p className={cn(styles.p, className, {
            [styles.text_12]: size == 'text_12',
            [styles.text_14]: size == 'text_14',
            [styles.text_16]: size == 'text_16'
        })}
        {...props}
        >
            {children}
        </p>
    </>
};