import React from 'react'
import MainNavigation from './MainNavigation'

import styles from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <MainNavigation />
            <main className={styles.mainBody}>{children}</main>
        </>
    )
}

export default Layout
