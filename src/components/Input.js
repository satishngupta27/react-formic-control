import React from 'react'
import TextError from './TextError'
import {Field, ErrorMessage} from 'formik'

function Input(props) {
    const {label,name,...rest}=props
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} compontent={TextError}/>
            
        </div>
    )
}

export default Input
