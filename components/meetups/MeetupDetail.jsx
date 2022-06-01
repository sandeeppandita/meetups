import React from 'react'
import Image from 'next/image'

import styles from './MeetupDetail.module.css'

const MeetupDetail = ({ id, title, image, address, description }) => {
    return (
        <div className={styles.meetupDetail}>
            <Image
                src={image}
                alt="Meetup place"
                width={700}
                height={500}
                layout="responsive"
            />
            <h1 className={styles.meetupDetail_title}>{title}</h1>
            <p className={styles.meetupDetail_address}>{address}</p>
            <p className={styles.meetupDetail_description}>{description}</p>
        </div>
    )
}

export default MeetupDetail
