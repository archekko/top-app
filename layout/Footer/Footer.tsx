import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import { Tsize } from "../../components";
import {format} from 'date-fns';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return <>
        <footer className={cn(className, styles.footer)} {...props}>
        <Tsize size= 'text_16'>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</Tsize>
        <a href="#" target='blank'>
            <Tsize size="text_16">Пользовательское соглашение</Tsize>
        </a>
        <a href="#" target='blank'>
            <Tsize size="text_16">Политика конфиденциальности</Tsize>
        </a>
        </footer>
    </>;
};