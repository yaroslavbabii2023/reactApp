import React from "react";
import styles from "./FormsControls.module.css"
import {Field} from "redux-form";

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const createField = (placeholder, validators, name, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} validate={validators} name={name} component={component} {...props} />
        {text}
    </div>)