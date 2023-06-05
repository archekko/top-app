import { TagProps } from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({size='m', children, color='ghost', href, className, ...props }: TagProps): JSX.Element => {
    return <>
        <div className={cn(styles.tag, className, {
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.primary]: color == 'primary',
            [styles.green]: color == 'green',
            [styles.red]: color == 'red',
            [styles.ghost]: color == 'ghost',
            [styles.gray]: color == 'gray'
        })}
        {...props}
        >
            {
                href
                ? <a href='href'>{children}</a>
                : <>{children}</>
            }
        </div>
    </>;
};