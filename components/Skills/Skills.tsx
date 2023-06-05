import { SkillsProps } from "./Skills.props";
import styles from './Skills.module.css';


export const Skills = ({children, className, ...props }: SkillsProps): JSX.Element => {
    return <>
        <div className={styles.skill}
        {...props}
        >
            {children}
        </div>
    </>;
};