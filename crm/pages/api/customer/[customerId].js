import Customer from "../../../models/Customer";
import ConnectDB from "../../../utiles/ConnectDB";

export default async function handler(req,res){
    try {
        await ConnectDB();
    } catch (error) {
        console.log(error);
        req.status(500).json({
            status:"failed",
            message:"Error in connect to DB"
        })
        return;
    }
    if(req.method === "GET"){
        const id = req.query.customerId
        await Customer.findOne({_id : id})
    }
}