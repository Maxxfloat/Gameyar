import React from 'react'
import {connect} from 'react-redux'

import styles from 'signup.module.scss'

const signup = () => {
  return (
    <>
      <div className={styles.section}>
        <h2>عضویت</h2>
        <form>

        </form>
      </div>
    </>
  )
}

export default connect()(signup)
