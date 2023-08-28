
import { useRouter } from "next/router";
import {getFiltredEvents} from "./../../helpers/api-utils";
import EventList from "../../components/EventsList";

const FilteredEvent = ({filteredEvent, hasError}) => {
    
    if(hasError){
        return (
            <h1 className="center">No event macthing the date sorry</h1>
        )
    }
    return (
        <EventList events={filteredEvent} />
    )
}
export const getServerSideProps = async (context) => {
    const {params} = context ;
    const data = params.slug;

  
    if(!data){
        return  <p>Loading ...</p>
    }

    const filteredYear = +data[0]
    const filteredMonth = +data[1];
    if(isNaN(data[0]) || isNaN(data[1]) || filteredYear > 2030 || filteredMonth < 1 ){
         return {
            notFound : true
         }
    }    
    const filteredEvent = await  getFiltredEvents({ year: filteredYear, month: filteredMonth});

    if(!filteredEvent || filteredEvent.length == 0){
        return {
           props: {
            hasError: true
           }
        }
    }


    return {
        props: {
            filteredEvent : filteredEvent
        }
    }
    
}


export default FilteredEvent;