import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'
const Layout = ({children}) => {
  return (
    <div className={styles.body}>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout