import styles from './index.module.css'

interface CardProps{
    children?: React.ReactNode,
    className?:string
}

export default function Card({ children, className }:CardProps){


    return(        
        <div className={`${styles.card} ${ Array.isArray(className) ? className.join(' ') : className }`}>{children}</div>
    )
}