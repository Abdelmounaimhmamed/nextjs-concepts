import EventItem from "./EventItem";
import classes from "./event-list.module.css";

const EventList = (props) => {
    const {events} = props;
    return <ul className={classes.list}>
        {events.map(event => <EventItem 
        key={event.id} 
        title={event.title}
        image={event.image}
        date={event.date}
        location={event.location}
        id={event.id}
        />)}
    </ul>    

}

export default EventList;