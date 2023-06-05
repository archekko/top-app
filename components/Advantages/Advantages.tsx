import styles from './Advantages.module.css';
import Adv from './adv.svg';
import { AdvantagesProps } from './Advantages.props';


export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <>
        {advantages.map(a => (
            <div key={a._id} className={styles.advantage}>
                <Adv className={styles.adv} />
                <div className={styles.title}>{a.title}</div>
                <hr className={styles.vline}/>
                <div className={styles.description}>
                    {a.description}
                </div>
            </div>
        ))}
        </>
    );
};