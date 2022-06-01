import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './MeetupItem.module.css'

const MeetupItem = ({ id, image, title, address }) => {
    const router = useRouter()

    const showDetailsHandler = () => {
        router.push('/' + id)
    }

    return (
        <div className={styles.tile}>
            <Image
                src={image}
                alt="Meetup place"
                width={500}
                height={350}
                layout="responsive"
            />
            <h2 className={styles.tile_title}>{title}</h2>
            <p className={styles.tile_address}>{address}</p>
            <button className={styles.tile_btn} onClick={showDetailsHandler}>
                View Details
            </button>
        </div>
    )
}

export default MeetupItem
