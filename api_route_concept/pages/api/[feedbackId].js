import path from "path";
import fs from "fs";

const handler =  (req , res) => {
    
    if(req.method === "GET"){
        const filePath = path.join(process.cwd() , "data" , "feedBack.json");
        const dataJson = fs.readFileSync(filePath , 'utf-8');
        const feedBackItems = JSON.parse(dataJson);
        const feedBackId = req.query.feedbackId;
        const selectedItem = feedBackItems.find(feedBack => feedBack.id == feedBackId);
        res.status(200).json({selectedItem});
    }
}

export default handler;