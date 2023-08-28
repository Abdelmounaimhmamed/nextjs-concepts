import Button from  "./../ui/button"
import classes from "./event-search.module.css";
import { useRef } from "react";

const EventSearch = (props) => {
    const year = useRef();
    const month = useRef();

    const handleEvent = (events) =>{
        events.preventDefault();
        const yearValue = year.current.value;
        const monthValue = month.current.value;

        props.onSearch(yearValue, monthValue);
    }

    return (
        <form className={classes.form}  onSubmit={handleEvent}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year"></label>
                    <select id="year" ref={year}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div  className={classes.control}>
                    <label htmlFor="month"></label>
                    <select id="month" ref={month}>
                        <option value="1">Junary</option>
                        <option value="2">Junary</option>
                        <option value="3">Junary</option>
                        <option value="4">Junary</option>
                    </select>
                </div>
                <Button >Submit</Button>
            </div>
        </form>
    )
}

export default EventSearch;