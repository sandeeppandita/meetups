import React, { useState, useRef, useEffect } from 'react'
import styles from './NewMeetupForm.module.css'

const NewMeetupForm = ({ onAddMeetup }) => {
    const titleInputRef = useRef()

    const [meetupDetails, setMeetupDetails] = useState({
        title: '',
        image: '',
        address: '',
        description: '',
    })

    const handleChange = (e) => {
        const { type, name, value } = e.target
        setMeetupDetails({ ...meetupDetails, [name]: value })
    }

    const hanldeSubmit = (e) => {
        e.preventDefault()
        onAddMeetup(meetupDetails)
    }

    useEffect(() => {
        titleInputRef.current.focus()
    }, [])

    return (
        <form className={styles.form} onSubmit={hanldeSubmit}>
            {/* meetup title */}
            <div className={styles.form_field}>
                <label> Meetup Title </label>
                <input
                    type="text"
                    name="title"
                    required
                    value={meetupDetails.title}
                    onChange={handleChange}
                    ref={titleInputRef}
                />
            </div>

            {/* meetup title */}
            <div className={styles.form_field}>
                <label> Meetup Image </label>
                <input
                    type="text"
                    name="image"
                    required
                    value={meetupDetails.image}
                    onChange={handleChange}
                />
            </div>

            {/* meetup address */}
            <div className={styles.form_field}>
                <label> Address </label>
                <input
                    type="text"
                    name="address"
                    required
                    value={meetupDetails.address}
                    onChange={handleChange}
                />
            </div>

            {/* meetup description */}
            <div className={styles.form_field}>
                <label> Description </label>
                <textarea
                    rows="5"
                    type="text"
                    name="description"
                    required
                    value={meetupDetails.description}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" value="Submit" className={styles.form_btn}>
                Add Meetup
            </button>
        </form>
    )
}

export default NewMeetupForm
