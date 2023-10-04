"use client"

import styles from './page.module.css'
import typo from '@/styles/typo/index.module.css'
import { Sort, Add, Checked, Unchecked } from '@/components/icons'
import Link from 'next/link'
import React, { useState } from 'react'
import SettingsLockButton from '@/components/settingsLockButton'
import EllipsisMenu from '@/components/ellipsisMenu'
import SearchBar from '@/components/searchBar'
import AddOrUpdateForm from '@/components/addOrUpdateForm'

export default function List() {

  const [isSettingsLock, toggleSettingsLock] = useState(true)
  const [isCheckedCheckboxSelectAll, toggleCheckboxSelectAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [isAddFormVisible, setAddFormVisible] = useState(false)
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false)
  const [addFormTextFields, setAddFormTextFields] = useState({id:null,image:'',title:'',translatedText:'',text:''})
  const [updateFormTextFields, setUpdateFormTextFields] = useState({id:null,image:'',title:'',translatedText:'',text:''})
  

  const handleSettingsLockButtonClick = () => toggleSettingsLock(previous => { toggleCheckboxSelectAll(() => false); return !previous })
  const handleCheckboxSelectAllOnChange = () => toggleCheckboxSelectAll(previous => !previous)
  const handleSearchInputOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setSearchValue(() => e.target.value)
  const handleClearButtonClick = () => setSearchValue(() => '')

  const handleSearchButtonClick = () => {



  }

  const handleDeleteButtonClick = () => {


  }
  const handleUpdateButtonClick = () => {
    setAddFormVisible( () => false )
    setUpdateFormVisible(() => true )
    console.log(isAddFormVisible,isUpdateFormVisible)

  }
  const handleAddButtonClick = () => {
    setAddFormVisible( () => true )

  }

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <button className={styles.addText} onClick={handleAddButtonClick}><Add /></button>
        <SearchBar searchValue={searchValue} onChangeSearchInput={handleSearchInputOnChange} onClickSearchClearButton={handleClearButtonClick} onClickSearchButton={handleSearchButtonClick} />
        <SettingsLockButton settingsLock={isSettingsLock} onClick={handleSettingsLockButtonClick} />
      </div>
      <div className={styles.list}>
        <div className={styles.header}>
          {
            isSettingsLock ?
              <>
                <button className={styles.col1}><Sort /></button>
                <div className={`${styles.col2} ${typo.medium}`}>Tap any row to start</div>
              </>
              :
              <>
                <label className={styles.col1} htmlFor="checkboxSelectAll">
                  {isCheckedCheckboxSelectAll ? <Checked /> : <Unchecked />}
                </label>
                <input type='checkbox' id="checkboxSelectAll" checked={isCheckedCheckboxSelectAll} onChange={handleCheckboxSelectAllOnChange} />
                <div className={`${styles.col2} ${typo.medium}`}>{0} row selected</div>
                <EllipsisMenu deleteButtonDisabled={isCheckedCheckboxSelectAll} updateButtonDisabled={isCheckedCheckboxSelectAll} onClickDeleteButton={handleDeleteButtonClick} onClickUpdateButton={handleUpdateButtonClick} />
              </>
          }
        </div>
        <ul className={styles.rows}>
          {new Array(16).fill(0).map((item => (

            <li key={Math.random()}>
              <input type="checkbox" />
              <Link href={'/'} className={typo.common}>Title Here</Link>
            </li>

          )))}
        </ul>
      </div>
      { isAddFormVisible ?
          <AddOrUpdateForm title="Add" onClose={ () => setAddFormVisible( () => false) } onSubmit={ () => console.log(addFormTextFields) } textFields={addFormTextFields} setTextFields={setAddFormTextFields} action='save' key={'saveForm'}/>
        :
        isUpdateFormVisible ? 
          <AddOrUpdateForm title="Update" onClose={ () => setUpdateFormVisible( () => false) } onSubmit={ () => console.log(updateFormTextFields) } textFields={updateFormTextFields} setTextFields={setUpdateFormTextFields} action='update' key={'updateForm'}/>
        :null
      }
      
    </div>
  )
}
