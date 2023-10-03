import styles from './index.module.css'
import Card from '@/components/card'
import StepIndicator from '@/components/stepIndicator'


interface FormCardProps{
    children:React.ReactNode,
    stepCount:number,
    currentStep:number
}


export default function FormCard({children, stepCount, currentStep}:FormCardProps){


    return(

        <Card className={styles.form}>
          <StepIndicator stepCount={stepCount} currentStep={currentStep}/>
            {children}
        </Card>

    )
}