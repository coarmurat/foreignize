import styles from './index.module.css'
import typo from '@/typo/index.module.css'
import { Children, ReactNode, isValidElement, cloneElement } from 'react'
interface InputProps{
    title:string,
    htmlFor?:string,
    children:React.ReactNode,
    className?:string,
    wrapperClassName?:string
}
interface CustomReactElement extends React.ReactElement {
    className?: string,
    id?:string
}

export default function InputCard({ title, htmlFor, children, className = '', wrapperClassName = '' }:InputProps){


    return(
        <div className={`${wrapperClassName} ${styles.inputCard}`}>
            <label htmlFor={htmlFor} className={`${className} ${typo.common}`}>{title}</label>
            {Children.map(children, (child: ReactNode) => {
                const childElement = child as CustomReactElement;
                if(isValidElement(childElement)){
                    return cloneElement(childElement,{
                        className: `${childElement.props.className || ''} ${typo.common} ${styles.input}`
                    })
                }

            })}
        </div>
    )
}