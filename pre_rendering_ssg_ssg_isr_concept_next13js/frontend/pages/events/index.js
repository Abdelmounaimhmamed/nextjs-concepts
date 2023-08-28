import Head from "next/head";
import EventList from "../../components/EventsList";
import EventSearch from "../../components/Event-search";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-utils";

const Events = ({events}) => {
    
    const router = useRouter();
    const findEventFiltered = (year,month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <Fragment>
            <Head>
                <title>All events </title>
                <meta name="description" content="All events" />
            </Head>
                <EventSearch  onSearch={findEventFiltered}/>
                <EventList events={events}/>
        </Fragment>
    )
}

export const getStaticProps = async (context) => {
    const events = await getAllEvents();
     
    return {
        props: {
            events : events
        },
        revalidate : 60
    }
}

export default Events ;