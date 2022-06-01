import React from 'react'
import Link from 'next/link'
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <div className={styles.header}>
            <Link href="/">
                <h3 className={styles.header_logo}>Gupshup Meetups</h3>
            </Link>

            <ul className={styles.header_menu}>
                <li className={styles.header_menuItem}>
                    <Link href="/">All Meetups</Link>
                </li>
                <li className={styles.header_menuItem}>
                    <Link href="/new-meetup">New Meetup</Link>
                </li>
            </ul>
        </div>
    )
}

export default MainNavigation
