
import { useRouter } from "next/router";
import {getFiltredEvents} from "./../../helpers/api-utils";
import EventList from "../../components/EventsList";
import { Fragment } from "react";
import Head from "next/head";

const FilteredEvent = ({filteredEvent, hasError}) => {

    const pageHeadData = (
        <Head>
                <title>FilteredEvent</title>
                <meta name="description"  content="event for a special date  " />
        </Head>
    )

    if(hasError){
        return (
            <Fragment>
                {pageHeadData}
                <h1 className="center">No event macthing the date sorry</h1>
            </Fragment>
        )
    }
    return (
        <Fragment>
           {pageHeadData}
            <EventList events={filteredEvent} />
        </Fragment>
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