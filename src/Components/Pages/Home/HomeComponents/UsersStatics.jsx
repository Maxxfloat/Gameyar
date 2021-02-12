import React from 'react'

import styles from './UsersStatics.module.scss';
import Card from '../../../UI/Card'
const UsersStatics = () => {
  return (
    <div className={styles.section}>
      <div className={styles.section__container}>
<div className={styles.title__container}>
  <h1>گیمر ها</h1>
</div>
<div className={styles.statics__container}>
    <Card>
      <div className={styles.statics__logo}>fuck</div>
    </Card>
    <Card>
      <div className={styles.statics__logo}>fuck</div>
    </Card>
    <Card>
      <div className={styles.statics__logo}>fuck</div>
    </Card>
</div>
      </div>
    </div>
  )
}


export default UsersStatics
