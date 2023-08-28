import { useRouter } from "next/router"
// import {getEventById} from "../../Dummy-Data";
import { getEventById, getFeaturedEvent } from "../../helpers/api-utils";
import { Fragment, useState } from "react";
import EventSummary from "../../components/event-details/event-summary"
import EventLogistics from "../../components/event-details/event-logistics";
import EventContent from "../../components/event-details/event-content";
import { getAllEvents } from "../../Dummy-Data";

const EventDetail = ({event}) => {
    
    
    if(!event){
        return (<p>Loading ...</p>)
    }

    return (
        <Fragment>
            <EventSummary title={event.title}></EventSummary>
            <EventLogistics  date={event.date} address={event.location} image={event.image}/>
            <EventContent >
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export const getStaticProps = async (context) => {
    const eventId = context.params.Id;
    const event = await getEventById(eventId);
    return {
        props : {
            event : event
        },
        revalidate: 10
    }
}

export const getStaticPaths = async () => {

    const events = await getFeaturedEvent();
    const ids = events.map(event => event.id);
    const params = ids.map(id => ({params: {Id : id}}));

    return {
        paths : params,
        fallback : true
    
}
}



export default EventDetail ;