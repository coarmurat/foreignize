"use client"

import StepIndicator from "@/components/stepIndicator"
import { useState } from "react"

export default function Login() {
    const [state, setState] = useState(0)

    return (
        <>
            <StepIndicator stepCount={4} currentStep={state}/>
            <button onClick={() => setState(previous => previous += 1)}>SET STEP {state}</button>
        </>
    )
}