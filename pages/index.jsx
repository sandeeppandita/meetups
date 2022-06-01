import React from 'react'
import Head from 'next/head'
import { MongoClient } from 'mongodb'

import MeetupList from '../components/meetups/MeetupList'

export const getStaticProps = async () => {
    const client = await MongoClient.connect(
        'mongodb+srv://sandeep:sandeep@cluster0.sqjfs.mongodb.net/meetups?retryWrites=true&w=majority'
    )
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find().toArray()
    client.close()

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                description: meetup.description,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 1,
    }
}

const Home = ({ meetups }) => {
    return (
        <>
            <Head>
                <title>Gupshup Meetups</title>
                <meta
                    name="description"
                    content="View all the ongoing and upcoming meetups"
                ></meta>
            </Head>
            <MeetupList meetups={meetups} />
        </>
    )
}

export default Home
