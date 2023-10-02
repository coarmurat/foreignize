import styles from './index.module.css'
import typo from '@/typo/index.module.css'

interface StepIndicatorProps{
    stepCount:number,
    currentStep:number
}

export default function StepIndicator({ stepCount, currentStep }:StepIndicatorProps){

    const stepNumbers = []
    for(let i = 1; i <= stepCount; i++)stepNumbers.push(i)
    return(
        <div className={styles.stepIndicator}>
            {stepNumbers.map( (stepNumber:number, index) => <div className={`${typo.common} ${(currentStep === index + 1) ? styles.currentStep : '' }`} key={stepNumber}>{stepNumber}</div>)}
        </div>
    )
}