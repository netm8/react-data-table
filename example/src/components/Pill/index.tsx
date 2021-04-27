import React, { FC } from 'react'
import styles from './Pill.module.scss'


export interface IPill {
  value: string
}

const Pill: FC<IPill> = ({ value }) => {

  return (
    <div className={styles.Pill}>
      {value}
    </div>
  )
}

export default Pill