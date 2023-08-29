import classes from "./Event-items.module.css";
import Button from "./../ui/button";
import Image from "next/image";

const EventItem = ({title , image, date ,location , id}) => {
    const dateToDisplay = new Date(date).toLocaleDateString("en-US" , {day: "numeric" , month:"long", year:"numeric"});
    const exploreEvent = `/events/${id}`;
    const adress = location.replace(", ","\n");
    return (
        <li className={classes.item}> 
            <Image src={image} alt={"lost and toast"}  />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date} >
                        <time>{dateToDisplay}</time>
                    </div>
                    <div className={classes.adress}>
                        <address>{adress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreEvent} >Expolore event</Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;