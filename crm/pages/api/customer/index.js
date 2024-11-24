import Customer from "../../../models/Customer";
import ConnectDB from "../../../utiles/ConnectDB";

export default async function handler(req, res) {
  try {
    await ConnectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB" });
    return;
  }

  if (req.method === "POST") {
    const data = req.body.data;

    if (!data.name || !data.lastName || !data.email)
      return res.status(400).json({
        status: "Failed",
        message: "Invalid Data",
      });

    try {
      
   
      const customer = await Customer.create(data);
      res
        .status(201)
        .json({ status: "success", message: "Data created", data: customer });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "Failed",
        message: "Error in Storing Data in DB",
      });
    }
  }
}
