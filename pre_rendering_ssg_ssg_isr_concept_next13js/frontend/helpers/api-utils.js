import axios from "axios";

export const getAllEvents = async () => {
    const response = await axios.get("http://localhost:3004/events");
    return response.data;
}



export const getFeaturedEvent = async () => {
    const events = await getAllEvents();
    const featuredEvents = events.filter(event => event.isFeatured);
    return featuredEvents;
}


export const getFiltredEvents=  async (dateFilter) => {
    const  {year , month} = dateFilter;
    const events = await getAllEvents() ;
    
  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month ;
  });
  return filteredEvents;
}

export const getEventById = async (id) => {
    const events = await getAllEvents();
    const event = events.find(event => event.id === id);
    return event;
}
