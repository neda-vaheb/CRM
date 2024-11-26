import HomePage from "../components/template/HomePage";
import Customer from "../models/Customer";
import ConnectDB from "../utiles/ConnectDB";

 function Home({customers}) {
  return (
<HomePage customers={customers}/>
  )
}
export default Home;

export async function getServerSideProps(){
  try{
await ConnectDB();
const customers = await Customer.find();
return{
  props:{
    customers : JSON.parse(JSON.stringify(customers))
  }
}
  }catch(err){
console.log(err)
return{
  notFound:true
}
  }
}