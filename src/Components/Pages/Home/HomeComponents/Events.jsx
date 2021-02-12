import React from 'react'

import styles from './Events.module.scss'

const Events = () => {
  const match = (<div className={styles.events__card}><h2>EMPTY</h2></div>)
  const repeat = [match]
    while (repeat.length < 9 ) {
    repeat.push(match)
    }
    console.log(repeat)
  return (
    <div className={styles.events__section}>
      <div className={styles.events__container}>
        <div className={styles.title__container}>
          <h1>مسابقات برگزار شده توسط گیمبا</h1>
        </div>
        <div className={styles.events__card__container}>
          <div className={styles.events__card__group}>
            {repeat.map((item)=>item)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
