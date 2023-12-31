"use client"
import styles from './index.module.css'
import { Ellipsis } from '@/components/icons'
import { useEffect, useRef } from 'react'
import typo from '@/styles/typo/index.module.css'
import { useState } from 'react'

interface EllipsisMenuProps{
  deleteButtonDisabled:boolean,
  updateButtonDisabled:boolean,
  onClickDeleteButton:React.MouseEventHandler,
  onClickUpdateButton:React.MouseEventHandler
}

export default function EllipsisMenu(
  {
    
    deleteButtonDisabled,
    updateButtonDisabled,
    onClickDeleteButton:handleDeleteButtonClick,
    onClickUpdateButton:handleUpdateButtonClick

  }:EllipsisMenuProps) {
    
    const ellipsisMenuDOMElementRef:{current:HTMLDivElement | null}= useRef(null)
    const [isShowEllipsisMenu, setShowEllipsisMenu] = useState(false)
    const handleEllipsisButtonClick = () => setShowEllipsisMenu( (previous => !previous))

    useEffect(() =>{

        const handleEllipsisMenuOutsideClick = (event:MouseEvent) => {
    
          if(ellipsisMenuDOMElementRef.current && !ellipsisMenuDOMElementRef.current.contains(event.target as Node)){
            
            setShowEllipsisMenu(() => false)
    
          }
          
        } 
        
        if(isShowEllipsisMenu){
    
          document.addEventListener('click',handleEllipsisMenuOutsideClick)
    
        }else{
    
          document.removeEventListener('click',handleEllipsisMenuOutsideClick)
    
        }
    
        return () => {
          
          document.removeEventListener('click',handleEllipsisMenuOutsideClick)
    
        }
      },[isShowEllipsisMenu])
      

    return(
        <div className={styles.ellipsisMenu}>
            <button onClick={handleEllipsisButtonClick}><Ellipsis/></button>
            {
            isShowEllipsisMenu ? 

            <div className={styles.items} ref={ellipsisMenuDOMElementRef}>
                <button className={typo.common} onClick={(e) => { setShowEllipsisMenu(() => false); handleDeleteButtonClick(e)}} disabled={deleteButtonDisabled}>Delete</button>
                <button className={typo.common} onClick={(e) => { setShowEllipsisMenu(() => false); handleUpdateButtonClick(e)}} disabled={updateButtonDisabled}>Update</button>
            </div>
            :
            null
            }
        </div>
    )
}