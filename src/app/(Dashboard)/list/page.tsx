"use client"

import styles from './page.module.css'
import typo from '@/typo/index.module.css'
import { Sort, Add, Checked, Unchecked, Upload } from '@/components/icons'
import Link from 'next/link'
import React, { useState } from 'react'
import SettingsLockButton from '@/components/settingsLockButton'
import EllipsisMenu from '@/components/ellipsisMenu'
import SearchBar from '@/components/searchBar'
import Overlay from '@/components/overlay'
import FormCard from '@/components/formCard'
import InputCard from '@/components/inputCard'
import Button from '@/components/button'

export default function List() {

  const [isSettingsLock, toggleSettingsLock] = useState(true)
  const [isCheckedCheckboxSelectAll, toggleCheckboxSelectAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const [isAddFormVisible, setAddFormVisible] = useState(false)

  const handleSettingsLockButtonClick = () => toggleSettingsLock(previous => { toggleCheckboxSelectAll(() => false); return !previous })
  const handleCheckboxSelectAllOnChange = () => toggleCheckboxSelectAll(previous => !previous)
  const handleSearchInputOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setSearchValue(() => e.target.value)
  const handleClearButtonClick = () => setSearchValue(() => '')

  const handleSearchButtonClick = () => {



  }

  const handleDeleteButtonClick = () => {


  }
  const handleUpdateButtonClick = () => {


  }
  const handleAddButtonClick = () => {
    setCurrentStep( () => 1 )
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
      {isAddFormVisible ? 
      <Overlay className={styles.overlay} onClick={(e) => setAddFormVisible(() => false )}>
        <FormCard stepCount={5} currentStep={currentStep}>
          <form>
            {
              currentStep === 1 ? (
                <>
                  <InputCard className={styles.imageLabel} title='Image' htmlFor='ImageInput'>
                    <label htmlFor="ImageInput" className={styles.imageInput}>
                      <button className={`${typo.medium1} ${styles.imageInputButton}`} type='button'>
                        <div className={styles.imageInputButtonLogo}><Upload /></div>
                        <div className={styles.imageInputButtonText}>Chooese...</div>
                      </button>
                    </label>
                    <input type='file' id='ImageInput' style={{ display: 'none' }} />
                  </InputCard>
                  <div className={styles.buttons} style={{justifyContent:'center'}}>
                    <Button onClick={() => setCurrentStep( previous => previous += 1)}>Next</Button>
                  </div>
                </>
              ):
              currentStep === 2 ? (
                <>
                  <InputCard title='Title' htmlFor='title'>
                    <input type='text' id='title' />
                  </InputCard>
                  <div className={styles.buttons}>
                    <Button secondary onClick={() => setCurrentStep( previous => previous -= 1)}>Previous</Button>
                    <Button onClick={() => setCurrentStep( previous => previous += 1)}>Next</Button>
                  </div>
                </>
              ):
              currentStep === 3 ? (
                <>
                  <InputCard title='Translated Text' htmlFor='translatedText' wrapperClassName={styles.verticalFit}>
                    <textarea id='translatedText' key={'translatedText'}/>
                  </InputCard>
                  <div className={styles.buttons}>
                    <Button secondary onClick={() => setCurrentStep( previous => previous -= 1)}>Previous</Button>
                    <Button onClick={() => setCurrentStep( previous => previous += 1)}>Next</Button>
                  </div>
                </>
              ):
              currentStep === 4 ? (
                <>
                  <InputCard title='Text' htmlFor='text' wrapperClassName={styles.verticalFit}>
                    <textarea id='text' key={'Text'}/>
                  </InputCard>
                  <div className={styles.buttons}>
                    <Button secondary onClick={() => setCurrentStep( previous => previous -= 1)}>Previous</Button>
                    <Button onClick={() => setCurrentStep( previous => previous += 1)}>Next</Button>
                  </div>
                </>
              ):
              currentStep === 5 ? (
                <>
                  <div>Successfully saved.</div>
                  <div className={styles.buttons} style={{justifyContent:'center'}}>
                    <Button secondary onClick={() => setAddFormVisible(() => false )}>Close</Button>
                  </div>
                </>
              ):null
            }
          </form>
        </FormCard>
      </Overlay>
      : null }
    </div>
  )
}
