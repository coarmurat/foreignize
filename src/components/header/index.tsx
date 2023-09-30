import styles from './index.module.css'
import typo from '@/typo/index.module.css'

import { BackButton, HamburgerMenu } from '@/components/icons'
import Nav from '../nav'

export default function Header() {
    

    return(
        <header className={styles.root}>
            <div className={styles.backButton}>
                <BackButton/>
            </div>
            <div className={`${styles.currentPageIndicator} ${typo.head2}`}>Landing Page</div>
            <div className={styles.hamburgerMenuButton}>
                <HamburgerMenu/>
            </div>
            <Nav/>
        </header>
    )
}