import React from "react";
import FormInput from "./FormInput";

function ItemList({ form, setForm }) {
  const { products } = form;
  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };
  const changeHandler = (e, index) => {
    const { value, name } = e.target;
    const newPoducts = [...products];
    newPoducts[index][name] = value;
    setForm({ ...form, products: newPoducts });
  };
  const deleteHandler = (index) => {
    const newPoducts = [...products];
    newPoducts.splice(index, 1);
    setForm({ ...form, products: newPoducts });
  };
  return (
    <div className="item-list">
      <p>Purchased Products</p>
      {products.map((product, index) => (
        <ProductItem key={index} product={product} index={index} changeHandler={(e) => changeHandler(e, index)} deleteHandler={() => deleteHandler(index)}/>
      ))}
      <button onClick={addHandler}>ADD Item</button>
    </div>
  );
}

export default ItemList;
 function ProductItem ({product , index , deleteHandler , changeHandler}){
    return(
    <div key={index} className="form-input__list">
        <FormInput
          name="name"
          label="Product name"
          type="text"
          value={product.name}
          onChange={changeHandler}
        />
        <div>
          <FormInput
            name="price"
            label="Price"
            type="number"
            value={product.price}
            onChange={changeHandler}
          />
          <FormInput
            name="qty"
            label="QTY"
            type="number"
            value={product.qty}
            onChange={changeHandler}
          />
        </div>
        <button onClick={deleteHandler}>Remove</button>
      </div>)
 }