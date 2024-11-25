import React from "react";
import ItemList from "./ItemList";
import FormInput from "./FormInput";

function Form({ form, setForm }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <FormInput
        type="text"
        name="name"
        value={form.name}
        label="Name"
        onChange={changeHandler}
      />
      <FormInput
        type="text"
        name="lastName"
        value={form.lastName}
        label="Last Name"
        onChange={changeHandler}
      />
      <FormInput
        type="text"
        name="email"
        value={form.email}
        label="Email"
        onChange={changeHandler}
      />
      <FormInput
        type="tel"
        name="phone"
        value={form.phone}
        label="Phone"
        onChange={changeHandler}
      />
      <FormInput
        type="text"
        name="address"
        value={form.address}
        label="Address"
        onChange={changeHandler}
      />
      <FormInput
        type="text"
        name="postalCode"
        value={form.postalCode}
        label="Postal Code"
        onChange={changeHandler}
      />
      <FormInput
        type="date"
        name="date"
        value={form.date}
        label="Date"
        onChange={changeHandler}
      />

      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
