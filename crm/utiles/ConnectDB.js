
import { MongoClient, ServerApiVersion } from 'mongodb';

 const uri ="mongodb+srv://nvahebnv:dmKTj1fPktMkw36C@cluster0.ozlkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default async function ConnectDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(err) {
    // Ensures that the client will close when you finish/error
  console.log(err)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
ConnectDB().catch(console.dir);
console.log("connect to DB");
