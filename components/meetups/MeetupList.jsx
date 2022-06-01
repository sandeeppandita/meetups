import React from 'react'

import MeetupItem from './MeetupItem'

import styles from './MeetupList.module.css'

const MeetupList = ({ meetups }) => {
    return (
        <div className={styles.tile_wrapper}>
            {meetups.map(({ id, image, title, address, description }) => (
                <MeetupItem
                    key={id}
                    id={id}
                    image={image}
                    title={title}
                    address={address}
                />
            ))}
        </div>
    )
}

export default MeetupList
