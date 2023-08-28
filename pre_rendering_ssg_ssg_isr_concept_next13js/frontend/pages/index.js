import { useEffect } from "react";
import EventList from "../components/EventsList";
import {getAllEvents , getFeaturedEvent} from "./../helpers/api-utils";
import Head from "next/head"

const Home = (props) => {
    const events = props.events;

    return (        
            <div className="">
                <Head>
                    <title>nextjs applicaton</title>
                    <meta name="description"  content="find a lot of great events that allow you to create to envolve ..."  />
                </Head>
                <EventList events={events} />
            </div>
)}

export const getStaticProps = async (context) => {
    const events =await  getFeaturedEvent();
    return  { 
        props: {
            events: events
        },
        revalidate : 100
    } 
}

export default Home;