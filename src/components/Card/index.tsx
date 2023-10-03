import styles from './index.module.css'

interface CardProps{
    children?: React.ReactNode,
    className?:string
}

export default function Card({ children, className = '' }:CardProps){


    return(        
        <div className={`${ className } ${ styles.card }`} onClick={e => e.stopPropagation()}>{children}</div>
    )
}