import styles from './index.module.css'

interface OverlayProps{
    children?: React.ReactNode,
    className?: string[] | string,
    onClick?: React.MouseEventHandler
}

export default function Overlay({ children, className = '', onClick:handleOverlayClick }:OverlayProps){


    return(        
        <div 
        
        className={`${ className } ${styles.overlay}`} 
        onClick={ typeof handleOverlayClick === 'function' ? handleOverlayClick : undefined }
        
        >{children}</div>
    )
}