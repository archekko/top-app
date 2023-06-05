import { SearchProps } from "./Search.props";
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState } from "react";
import SearchIcon from './search.svg';
import { useRouter } from "next/router";

export const Seacrh = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key == 'Enter') {
            goToSearch();
        }
    };

    return (
        <div className={cn(styles.search, className)} {...props}>
            <Input 
                className={styles.input}
                placeholder='Поиск...' 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                />
            <Button
               color='primary'
               className={styles.button} 
               onClick={goToSearch}
                aria-label='Искать'
            >
                <SearchIcon/>
            </Button>
        </div>
    );
};