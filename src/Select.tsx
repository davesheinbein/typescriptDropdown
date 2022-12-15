import React from 'react'
import styles from "./select.module.scss"

type selectOption = {
    label: string
    value: any
}
type selectProps = {
    options?: selectOption[]
    value?: selectOption
    onChange?: (value?: selectOption | undefined) => void
}

const Select = ({value, onChange, options}: selectProps) => {
    return (
        <div className={styles.select} tabIndex={0}>
            <div className={styles.container}>
                <span className={styles.value}>Value</span>
                <button className={styles["clear-btn"]}>&times;</button>
                <div className={styles.divider}></div>
                <div className={styles.caret}></div>
                <ul className={styles.options}>
                    {options?.map(option => (
                        <li key={option.label} className={styles.option}>{option.label}</li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Select