import React from 'react'

function FormInput({label , type ,name ,value ,onChange}) {
  return (
    <div className='form-input'>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type={type} value={value} onChange={onChange}/>
    </div>
  )
}

export default FormInput
