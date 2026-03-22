import { ComponentProps,ReactNode } from 'react'
import styles from './PrimaryBtn.module.css'

type PropsType = {
    children:ReactNode;
} & ComponentProps<'button'>

export const PrimaryBtn = ({ children, ...props }: PropsType) => {
    return (
        <button className={styles.btn}{...props}>
            {children}
        </button>
    )
}
