// import React from 'react'
import styles from "./select.module.css"

type selectOption = {
    label: string
    value: string
}
type selectProps = {
    options?: selectOption[]
    value?: selectOption
    onChange?: (value?: selectOption | undefined) => void
}

const Select = ({value, onChange, options}: selectProps) => {
  return (
    <div className={styles.container}>
        <span className={styles.value}>Value</span>
    </div>
  )
}

export default Select