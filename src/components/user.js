import React from "react"
import styles from "./user.module.css"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <img src={props.logo} alt="" />
    </div>
  </div>
)

export default User;