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
    if(req.method === "PATCH"){
        const id = req.query.customerId;
        const data = req.body.data;
        try {
          const customer =   await Customer.findOne({ _id: id });
          customer.name = data.name;
          customer.lastName = data.lastName;
          customer.email = data.email;
          customer.phone = data.phone;
          customer.address = data.address;
          customer.postalCode = data.postalCode;
          customer.date = data.date;
          customer.products = data.products;
          customer.updatedAt = Date.now();
          customer.save();

            res.status(200).json({
            status:"success",
            message:"Edit successfully",
            data: customer
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