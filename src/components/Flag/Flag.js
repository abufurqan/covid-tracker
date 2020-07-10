import React from 'react'
import styles from './Flag.module.css'

const Flag = ({flagURL}) => {
  return (
  <div  className={styles.flag}>
    <img src={flagURL} width="50" alt="Flag" />
  </div>)
}

export default Flag