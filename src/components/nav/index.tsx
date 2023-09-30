import styles from './index.module.css'
import typo from '@/typo/index.module.css'

export default function Nav() {
    
    return(
        <nav className={styles.root}>
            <ul>
                <li className={typo.head2}>Landing Page</li>
                <li className={typo.head2}>Text List</li>
                <li className={typo.head2}>How Works</li>
            </ul>
            <div></div>
        </nav>  
    )
}