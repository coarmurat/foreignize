import styles from './index.module.css'
import { Lock, Unlock } from '@/components/icons'

interface SettingsLockButtonProps{
    settingsLock:boolean,
    onClick:React.MouseEventHandler
}

export default function SettingsLockButton({settingsLock:isSettingsLock, onClick:handleSettingsLockButtonClick}:SettingsLockButtonProps){
    
    return(
        <button className={styles.settingsLock} onClick={handleSettingsLockButtonClick}>
            {isSettingsLock ? <Lock/> : <Unlock/>}
        </button>
    )
}