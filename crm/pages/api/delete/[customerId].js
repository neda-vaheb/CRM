import ConnectDB from "../../../utiles/ConnectDB";
import Customer from "../../../models/Customer"
export default async function handler(req ,res){
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
    if(req.method === "DELETE"){
const id = req.query.customerId;
try {
    await Customer.deleteOne({ _id: id });
    res.status(200).json({
    status:"success",
    message:"Data is deleted"
})

} catch (error) {
    console.log(error);
    req.status(500).json({
        status:"failed",
        message:"Error in delete custumer"
    })
}
    }
}