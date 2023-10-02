"use client"
import styles from './index.module.css'
import typo from '@/typo/index.module.css'
import { Search, Clear } from '@/components/icons'


export default function SettingsLockButton({searchValue, onChangeSearchInput:handleSearchInputChange, onClickSearchClearButton:handleClearButtonClick, onClickSearchButton:handleSearchButtonClick}:any) {
    
    return(
        <div className={styles.searchBar}>
            <button className={styles.searchButton} onClick={handleSearchButtonClick}><Search/></button>
            <input type="text" className={typo.medium1} placeholder='Search...' value={searchValue} onChange={handleSearchInputChange}/>
            { searchValue ? <button className={styles.clearButton} onClick={handleClearButtonClick}><Clear/></button> : null }
        </div>
    )
}