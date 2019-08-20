import React from "react"
import styles from "./carousel.module.scss"

const index = ({ children }) => {
  return <div className={`${styles.carousel} full-width`}>{children}</div>
}

export default index