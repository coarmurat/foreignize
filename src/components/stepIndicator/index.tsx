import styles from './index.module.css'
import typo from '@/styles/typo/index.module.css'

interface StepIndicatorProps{
    stepCount:number,
    currentStep:number,
    title:string
}

export default function StepIndicator({ stepCount, currentStep, title }:StepIndicatorProps){

    const stepNumbers = []
    for(let i = 1; i <= stepCount; i++)stepNumbers.push(i)
    return(
        <div className={styles.stepIndicator}>
            <div className={`${styles.title} ${typo.common}`}>{title}</div>
            <div className={styles.indicator}>
                {stepNumbers.map( (stepNumber:number, index) => <div className={`${typo.common} ${(currentStep === index + 1) ? styles.currentStep : '' }`} key={stepNumber}>{stepNumber}</div>)}
            </div>
        </div>
    )
}