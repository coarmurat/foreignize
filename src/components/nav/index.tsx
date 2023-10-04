"use client"

import styles from './index.module.css'
import sharedStyles from '@/styles/shared/index.module.css'
import typo from '@/styles/typo/index.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SetStateAction, useEffect } from 'react'

interface NavProps {
    toggle:boolean,
    setToggleNav:React.Dispatch<SetStateAction<boolean>>
}

export default function Nav({ toggle = false, setToggleNav}:NavProps) {
    
    const pathname = usePathname()
    if(setToggleNav){
        useEffect(() => setToggleNav( () => false ),[pathname])
    }
    

    return(
        <nav className={`${styles.root} ${toggle ? '' : styles.hide }`}>
            <ul>
                <div className={styles.primaryLinks}>
                    <li><Link className={typo.head2} href='/'> Landing Page </Link></li>
                    <li><Link className={typo.head2} href='/list'> Text List </Link></li>
                    <li><Link className={typo.head2} href='/how'> How Works </Link></li>
                </div>
                <div className={styles.secondaryLinks}>
                    <li><Link className={typo.head2} href='/login'> Login </Link></li>
                    <li><Link className={typo.head2} href='/register'> Register </Link></li>
                </div>
            </ul>
            <div className={`${sharedStyles.overlay} ${styles.overlay}`} onClick={ () => setToggleNav ? setToggleNav(() => false):null }/>
        </nav>  
    )
}