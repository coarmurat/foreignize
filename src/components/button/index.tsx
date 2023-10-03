import styles from './index.module.css'
import typo from '@/typo/index.module.css'

interface ButtonProps extends React.ComponentProps<'button'>{
    primary?:any,
    secondary?:any
}

export default function Button(props:ButtonProps){
    
    const { primary, secondary, className, ...rest } = props

    const priority = primary ? styles.primary : secondary ? styles.secondary : styles.primary
    
    return <button className={`${className && '' } ${styles.button} ${typo.common} ${priority}`} type='button' {...rest} ></button>
}