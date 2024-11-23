import { useState } from "react";
import Form from "../module/Form";
import {useRouter} from "router/next";

function AddCustomer() {
const [form , setForm] = useState({
    name:"",
    lastName:"",
    email:"",
    phone:"",
    address:"",
    postalCode:"",
    date:"",
    products:[]
});
const router = useRouter();
const cancelHandler = ()=>{
    setForm({
        name:"",
        lastName:"",
        email:"",
        phone:"",
        address:"",
        postalCode:"",
        date:"",
        products:[]
    });
    router.push("/");

}
const saveHandler = async()=>{
    const res =await fetch("api/costumer",{
        method:"POST",
        body:JSON.stringify({data:form}),
        headers:{"Contect-Type":"application/json"}

    })
    const data = await res.json();
    if(data.status === "success") router.push("/")
}
  return (
    <div className="customer-page">
      <h4>Add New Costumer</h4>
      <Form form={form} setForm={setForm}/>
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  )
}

export default AddCustomer
