"use client"
import styles from './index.module.css'
import { Lock, Unlock } from '@/components/icons'

export default function SettingsLockButton({settingsLock:isSettingsLock, onClick:handleSettingsLockButtonClick}:any) {
    
    return(
        <button className={styles.settingsLock} onClick={handleSettingsLockButtonClick}>
            {isSettingsLock ? <Lock/> : <Unlock/>}
        </button>
    )
}