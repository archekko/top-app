import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import CloseIcon from './close.svg';
import { Controller, useForm } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import { API } from "../../helpers/api";
import axios from "axios";
import { useState } from "react";

export const ReviewForm = ({ productId, className , ...props }: ReviewFormProps): JSX.Element => {
    const {register, control, handleSubmit, formState: {errors}, reset} = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так');
            }
        } catch (e:any) {
            setError(e.message);
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn(styles.reviewForm, className)}
        {...props}
        >
            <Input 
            {...register('name', {required
            : {value: true, message:"Заполните имя"}})}
            placeholder="Name"
            error={errors.name}
            />
            <Input 
            {...register('title', {required
            : {value: true, message:"Заполните заголовок"}})}
            placeholder="Title"
            className={styles.title} 
            error={errors.title}/>
            <div className={styles.rating}>
                <span>Оценка</span>
                <Controller
                    control={control}
                    name="rating"
                    rules= {{required: {value: true, message: 'Укажите рейтинг'}}}
                    render={(field) => (
                        <Rating 
                        isEditable
                        rating={field.field.value}
                        setRating={field.field.onChange} 
                        ref={field.field.ref}
                        error={errors.rating}
                        />
                    )}
                />
                
            </div>
            <TextArea {...register('description')} placeholder="Text" className={styles.description}/>
            <div className={styles.submit}>
                <Button color='primary'>Отправить</Button>
                <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
        </div>
        {isSuccess && 
            <div className={styles.success}>
            <div className={styles.successTitle}>Ваш отзыв отправлен</div>
            <div>
                Спасибо, ваш отзыв будет опубликован после проверки.
            </div>
            <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)}/>
            </div>
        }
        {error && 
            <div className={styles.error}>
                "Что-то пошло не так"
            <CloseIcon className={styles.close} onClick = {() => setError(undefined)}/>
            </div>
        }
        
        </form>
    );
};