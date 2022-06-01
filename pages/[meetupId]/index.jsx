import React from 'react'
import Head from 'next/head'
import { MongoClient } from 'mongodb'

import MeetupDetail from '../../components/meetups/MeetupDetail'

export const getStaticPaths = async () => {
    const client = await MongoClient.connect(
        'mongodb+srv://sandeep:sandeep@cluster0.sqjfs.mongodb.net/meetups?retryWrites=true&w=majority'
    )
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()
    // console.log(meetups)
    client.close()

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
    }
}

export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId

    console.log('meetup id - ', meetupId)

    const client = await MongoClient.connect(
        'mongodb+srv://sandeep:sandeep@cluster0.sqjfs.mongodb.net/meetups?retryWrites=true&w=majority'
    )
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const allmeetups = await meetupsCollection.find().toArray()
    const selectedMeetup = allmeetups
        .map((meetup) => ({
            title: meetup.title,
            image: meetup.image,
            address: meetup.address,
            description: meetup.description,
            id: meetup._id.toString(),
        }))
        .filter((meetup) => meetup.id === meetupId)

    console.log(selectedMeetup)
    client.close()

    return {
        props: {
            meetupDetail: selectedMeetup[0],
        },
    }
}

const MeetupDetails = ({ meetupDetail }) => {
    const { id, title, image, address, description } = meetupDetail
    return (
        <>
            <Head>
                <title> {title} | Gupshup Meetups</title>
                <meta name="description" content={description}></meta>
            </Head>

            <MeetupDetail
                id={id}
                title={title}
                image={image}
                address={address}
                description={description}
            />
        </>
    )
}

export default MeetupDetails
