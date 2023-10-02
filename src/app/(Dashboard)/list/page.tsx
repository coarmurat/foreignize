"use client"

import styles from './page.module.css'
import typo from '@/typo/index.module.css'
import { Sort, Add, Checked, Unchecked } from '@/components/icons'
import Link from 'next/link'
import { useState } from 'react'
import SettingsLockButton from '@/components/settingsLockButton'
import EllipsisMenu from '@/components/ellipsisMenu'
import SearchBar from '@/components/searchBar'

export default function List() {
  
  const [isSettingsLock, toggleSettingsLock] = useState(true)
  const [isCheckedCheckboxSelectAll, toggleCheckboxSelectAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  
  const handleSettingsLockButtonClick = () => toggleSettingsLock( previous => { toggleCheckboxSelectAll(() => false ); return !previous} )
  const handleCheckboxSelectAllOnChange = () => toggleCheckboxSelectAll( previous => !previous)
  const handleSearchInputOnChange:React.ChangeEventHandler<HTMLInputElement> = (e) => setSearchValue( () => e.target.value )
  const handleClearButtonClick = () => setSearchValue(() => '')
  
  const handleSearchButtonClick = () => {


  
  }

  const handleDeleteButtonClick = () => {


  }
  const handleUpdateButtonClick = () => {

    
  }
  const handleAddButtonClick = () => {

  
  }

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <button className={styles.addText} onClick={handleAddButtonClick}><Add/></button>
        <SearchBar searchValue={searchValue} onChangeSearchInput={handleSearchInputOnChange} onClickSearchClearButton={handleClearButtonClick} onClickSearchButton={handleSearchButtonClick}/>
        <SettingsLockButton settingsLock={isSettingsLock} onClick={handleSettingsLockButtonClick}/>
      </div>
      <div className={styles.list}>
        <div className={styles.header}>
        {
          isSettingsLock? 
          <>
            <button className={styles.col1}><Sort/></button>
            <div className={`${styles.col2} ${typo.medium}`}>Tap any row to start</div>
          </>
          :
          <>
            <label className={styles.col1} htmlFor="checkboxSelectAll">
              {isCheckedCheckboxSelectAll? <Checked/> : <Unchecked/>}
            </label>
            <input type='checkbox' id="checkboxSelectAll" checked={isCheckedCheckboxSelectAll} onChange={handleCheckboxSelectAllOnChange}/>
            <div className={`${styles.col2} ${typo.medium}`}>{0} row selected</div>
            <EllipsisMenu deleteButtonDisabled={isCheckedCheckboxSelectAll} updateButtonDisabled={isCheckedCheckboxSelectAll} onClickDeleteButton={handleDeleteButtonClick} onClickUpdateButton={handleUpdateButtonClick}/>
          </>
        }
        </div>
        <ul className={styles.rows}>
          {new Array(16).fill(0).map((item => (
          
            <li key={Math.random()}>
              <input type="checkbox"/>
              <Link href={'/'} className={typo.common}>Title Here</Link>
            </li> 

          )))}
        </ul>
      </div>
    </div>
  )
}
