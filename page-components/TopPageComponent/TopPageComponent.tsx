import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import cn from 'classnames';

import { TopLevelCategory } from '../../interfaces/page.inteface';
import { Advantages, HhData, Htag, Input, Product, Sort, Tag } from '../../components';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';
import { useScrollY } from '../../helpers/useScrollY';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    const [{products: sortedProducts, sort}, dispathSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});
    
    const y = useScrollY();

    const setSort = (sort: SortEnum) => {
        dispathSort({type: sort});
    };
    
    useEffect (() => {
        dispathSort({type: 'reset', initialState: products});
    }, [products]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.second_title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag size='m' color='gray'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
            </div>
            {sortedProducts && sortedProducts.map(p => (<Product layout key={p._id} product={p}/>))}

            <div className={styles.first_title}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                <Tag size='m' color='red'>hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}

            {page.advantages && page.advantages.length > 0 && <>
                <div className={styles.three_title}>
                <Htag tag='h2'>Преимущества</Htag>
                <Advantages advantages={page.advantages}/>
                </div>
            </>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }}/>}

            {page.tags && 
                <div className={styles.tags}>
                    <Htag tag='h2'>Получаемые навыки</Htag>
                    <div className={styles.tags_wrapper}>
                    {page.tags.map(t => <Tag key={t} color='primary' size={'s'}>{t}</Tag>)}
                    </div>
                </div>}
        </div>
    );
};