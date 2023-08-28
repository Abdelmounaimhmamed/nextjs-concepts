import { useEffect } from "react";
import EventList from "../components/EventsList";
import {getAllEvents , getFeaturedEvent} from "./../helpers/api-utils";

const Home = (props) => {
    const events = props.events;

    return (        
            <div className="">
            
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