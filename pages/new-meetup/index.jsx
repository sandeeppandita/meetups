import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const index = () => {
    const router = useRouter()

    async function addMeetupHandler(meetupDetails) {
        console.log('new meetup details : ', { meetupDetails })

        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetupDetails),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await response.json()

        console.log(data)

        router.replace('/')
    }

    return (
        <>
            <Head>
                <title> Create a new meetup | Gupshup Meetups</title>
                <meta
                    name="description"
                    content="View all the ongoing and upcoming meetups"
                ></meta>
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}

export default index
