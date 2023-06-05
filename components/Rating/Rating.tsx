import { RatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';
import { ForwardedRef, forwardRef, useEffect, useState } from "react";

export const Rating = forwardRef(({ isEditable = false, rating, setRating, error, ...props }: RatingProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]); 

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i+1)}
                    // onMouseLive={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                />
            );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    return (
        <div ref={ref} {...props} className={styles.wrapper}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span className={styles.errorMess}>{error.message}</span>}
        </div>
    );
});