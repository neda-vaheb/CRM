import React, { useState } from "react";
import Form from "../module/Form";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";

function CustomerDetailsPage({ data, id }) {
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";

 const router = useRouter();
 const deleteHandler = async()=>{
  const res = await fetch(`/api/delete/${id}`,{method:"DELETE"});
  const newRes = await res.json();
  if(newRes.status === "success") return router.push("/");
 }

  return (
    <div className="cusome-detail">
      <h4> Customer's Details</h4>
      {/* <Form form={form} setForm={setForm} /> */}
      <div className="customer-detail__main">
     <div className="customer-detail__item">
      <span>Name : </span>
      <p>{data.name}</p>
     </div>
     <div className="customer-detail__item">
      <span>Last Name : </span>
      <p>{data.lastName}</p>
     </div>
     <div className="customer-detail__item">
      <span>Email : </span>
      <p>{data.email}</p>
     </div>
     <div className="customer-detail__item">
      <span>phone : </span>
      <p>{data.phone}</p>
     </div>
     <div className="customer-detail__item">
      <span>Address : </span>
      <p>{data.address}</p>
     </div>
     <div className="customer-detail__item">
      <span>Postal Code : </span>
      <p>{data.postalCode}</p>
     </div>
     <div className="customer-detail__item">
      <span>Date : </span>
      <p>{date}</p>
     </div>
    
      </div>
      <div className="customer-detail__products">
      <p>Name </p>
      <p>Price</p>
      <p>QTY</p>
      {data.products.map((product,index)=>
      <React.Fragment key={index}>
<span>{product.name}</span>
<span>{product.price}</span>
<span>{product.qty}</span>


      </React.Fragment>)}
     </div>
     <div className="customer-detail__buttons">
      <p>Edit or Delete?</p>
      <button onClick={deleteHandler}>Delete</button>
      <Link href={`/edit/${id}`}>Edit</Link>
     

     </div>
    </div>
  );
}

export default CustomerDetailsPage;
