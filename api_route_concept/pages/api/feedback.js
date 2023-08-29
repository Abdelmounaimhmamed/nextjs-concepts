import fs from "fs";
import path  from "path";

const handler =  (req ,res) => {
  const filePath = path.join(process.cwd() , "data" , "feedBack.json");
  const dataJson = fs.readFileSync(filePath);
  if(req.method === "POST" ){
    const {email , feedBack} = req.body;
    const data = JSON.parse(dataJson);
    const id = Math.random() * 10;
    data.push({id , email , feedBack});
    const dataBack = JSON.stringify(data);
    fs.writeFileSync(filePath,dataBack);
    res.status(200).json({message : 'ok!!!'})
  }
  if(req.method === "GET"){
    const data = JSON.parse(dataJson);
    res.status(200).json({arrayOfFeedBack : data});
  }
}



export default handler;
