"use client"

import styles from './index.module.css'
import typo from '@/typo/index.module.css'

import { BackButton } from '@/components/icons'
import Nav from '@/components/nav'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
    
    const [toggleNav, setToggleNav] = useState(false)
    const handleHamburgerMenuButtonClick = () => setToggleNav( previous => !previous) 
    
    const router = useRouter()
    const handleBackButtonClick = () => router.back()
    
    return(
        <header className={styles.root}>
            <button className={styles.backButton} onClick={handleBackButtonClick}>
                <BackButton/>
            </button>
            <div className={`${styles.currentPageIndicator} ${typo.head2}`}>Landing Page</div>
            <div className={styles.barsButtonWrapper} onClick={handleHamburgerMenuButtonClick}>
                <button className={styles.barsButton}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <Nav toggle={toggleNav} setToggleNav={setToggleNav}/>
        </header>
    )
}