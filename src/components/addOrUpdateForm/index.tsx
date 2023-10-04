"use client"

import styles from './index.module.css'
import sharedStyles from '@/styles/shared/index.module.css'
import typo from '@/styles/typo/index.module.css'
import StepIndicator from '@/components/stepIndicator'
import { Upload } from '@/components/icons'
import { useState } from 'react'

interface AddFormProps{
    textFields:any,
    setTextFields:any,
    action:string,
    onClose:any,
    onSubmit:any,
    title:string
}

export default function AddOrUpdateForm({ onClose, onSubmit, textFields, setTextFields, action, title }:AddFormProps){
    
    const [currentStep, setCurrentStep] = useState(1)

    return(    
                <div className={`${sharedStyles.overlay} ${sharedStyles.formOverlay}`} onClick={() => { setTextFields( () => ({id:null,image:'',title:'',translatedText:'',text:''}));onClose()}}>
                        <form className={`${sharedStyles.card} ${sharedStyles.form}`} onClick={ (e) => e.stopPropagation() }>
                            <StepIndicator stepCount={5} currentStep={currentStep} title={title}/>    
                            {
                                currentStep === 1 ? 
                                <>  
                                    <div className={sharedStyles.inputsRow}>
                                        <div className={sharedStyles.inputField}>
                                            <label htmlFor="addImage" className={`${sharedStyles.label} ${typo.medium1}`}>Image</label>
                                            <label htmlFor="addImage" className={`${sharedStyles.labelInput} ${sharedStyles.input}`}>
                                                <button type='button'>
                                                    <div><Upload /></div>
                                                    <div className={typo.medium1}>Chooese...</div>
                                                </button>
                                                <input type="file" name="addImage" id="addImage" className={sharedStyles.none} value={textFields.image} onChange={ (e) => setTextFields( (previous:any) => ({...previous, image:e.target.value}) )}/>
                                            </label>
                                        </div>
                                    </div>
                                    <div className={sharedStyles.buttonsRow}>
                                        <button onClick={ () => setCurrentStep( () => 2)} type="button" className={`${sharedStyles.button} ${sharedStyles.primaryButton}`}>Next</button>
                                    </div>
                                </>
                                :
                                currentStep === 2 ? 
                                <>
                                    <div className={sharedStyles.inputsRow}>
                                        <div className={sharedStyles.inputField}>
                                            <label htmlFor="title" className={`${sharedStyles.label} ${typo.medium1}`}>Title</label>
                                            <input type="text" id="title" className={`${sharedStyles.input} ${sharedStyles.text}`} value={textFields.title} onChange={ (e) => setTextFields( (previous:any) => ({...previous, title:e.target.value}) )}/>
                                        </div>
                                    </div>
                                    <div className={sharedStyles.buttonsRow}>
                                        <button onClick={ () => setCurrentStep( () => 1)} type="button" className={`${sharedStyles.button} ${sharedStyles.secondaryButton}`}>Previous</button>
                                        <button onClick={ () => setCurrentStep( () => 3)} type="button" className={`${sharedStyles.button} ${sharedStyles.primaryButton}`}>Next</button>
                                    </div>
                                </>
                                :
                                currentStep === 3 ? 
                                <>
                                    <div className={sharedStyles.inputsRow}>
                                        <div className={`${sharedStyles.inputField} ${sharedStyles.flex1}`}>
                                            <label htmlFor="translatedText" className={`${sharedStyles.label} ${typo.medium1}`}>Translated Text</label>
                                            <textarea id="translatedText" className={`${sharedStyles.input} ${sharedStyles.textarea}`} value={textFields.translatedText} onChange={ (e) => setTextFields( (previous:any) => ({...previous, translatedText:e.target.value}) )}></textarea>
                                        </div>
                                    </div>
                                    <div className={sharedStyles.buttonsRow}>
                                        <button onClick={ () => setCurrentStep( () => 2)} type="button" className={`${sharedStyles.button} ${sharedStyles.secondaryButton}`}>Previous</button>
                                        <button onClick={ () => setCurrentStep( () => 4)} type="button" className={`${sharedStyles.button} ${sharedStyles.primaryButton}`}>Next</button>                            
                                    </div>
                                </>
                                :
                                currentStep === 4 ? 
                                <>
                                    <div className={sharedStyles.inputsRow}>
                                        <div className={`${sharedStyles.inputField} ${sharedStyles.flex1}`}>
                                            <label htmlFor="text" className={`${sharedStyles.label} ${typo.medium1}`}>Text</label>
                                            <textarea id="text" className={`${sharedStyles.input} ${sharedStyles.textarea}`} value={textFields.text} onChange={ (e) => setTextFields( (previous:any) => ({...previous, text:e.target.value}) )}></textarea>
                                        </div>
                                    </div>                                
                                    <div className={sharedStyles.buttonsRow}>
                                        <button onClick={ () => setCurrentStep( () => 3)} type="button" className={`${sharedStyles.button} ${sharedStyles.secondaryButton}`}>Previous</button>
                                        <button onClick={ () => {onSubmit();setCurrentStep( () => 5)}} type="button" className={`${sharedStyles.button} ${sharedStyles.primaryButton}`}>{action === 'update' ? 'Update' : 'Save'}</button>
                                    </div>
                                </>
                                :
                                currentStep === 5 ? 
                                <>
                                    <div className={`${sharedStyles.successRow} ${typo.head2}`}>Successfully {action === 'update'? 'updated' : 'saved'}</div>
                                    <div className={sharedStyles.buttonsRow}>
                                        <button onClick={() => { setTextFields( () => ({id:null,image:'',title:'',translatedText:'',text:''}));onClose()}} type="button" className={`${sharedStyles.button} ${sharedStyles.primaryButton}`}>Close</button>
                                    </div>
                                </>
                                :
                                null
                            }
                        </form>
                </div>
    )
}