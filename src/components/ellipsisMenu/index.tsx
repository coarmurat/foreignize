"use client"
import styles from './index.module.css'
import { Ellipsis } from '@/components/icons'
import { useEffect, useRef } from 'react'
import typo from '@/typo/index.module.css'
import { useState } from 'react'

export default function EllipsisMenu({deleteButtonDisabled,updateButtonDisabled,onClickDeleteButton:handleDeleteButtonClick, onClickUpdateButton:handleUpdateButtonClick}:any) {
    
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
                <button className={typo.common} onClick={handleDeleteButtonClick} disabled={deleteButtonDisabled}>Delete</button>
                <button className={typo.common} onClick={handleUpdateButtonClick} disabled={updateButtonDisabled}>Update</button>
            </div>
            :
            null
            }
        </div>
    )
}