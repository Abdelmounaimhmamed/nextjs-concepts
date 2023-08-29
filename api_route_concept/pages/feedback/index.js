import axios from "axios"
import { useState } from "react";



const FeedBackPage = ({data}) => {
    const [feeBackDetail , setfeeBackDetail] = useState();

    const GetDetails = async (feedbackId) => {
        console.log("hhh");
        const {data} = await axios.get(`http://localhost:3000/api/${feedbackId}`);
        console.log(data);
        setfeeBackDetail(data.selectedItem);
    }
    return (
        <main>
            {feeBackDetail && <p>{feeBackDetail.email}</p>}
                {data.map(item => <li>{item.id} <button onClick={() => GetDetails(item.id)}>show details </button></li>)}
        </main>
    )
}

export const getStaticProps = async (context) =>{
    const {data} = await axios.get("http://localhost:3000/api/feedback");
    return {
        props : {
            data : data.arrayOfFeedBack
        }
    }
}


export default FeedBackPage;