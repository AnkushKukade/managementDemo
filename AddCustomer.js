import React, { useState } from 'react';
 import Validation from './Validation';
function AddCustomer() {
  //setting errors to empty object
  const[errors,setErrors]=useState({});
  //setting defalut values
  const[values,setValues]=useState({
   name:"",
    address:"",
    mobile:""
  });
  // on typing values it will get stored here
  const handleChange=(event)=>{
               setValues({
                ...values,
                [event.target.name]:event.target.value,
               })
  };
  //to avoid refreshment of page after clicking login
  const handleLogin =(event)=>{
    event.preventDefault();
    //calling validation
     setErrors(Validation(values)); 
  };
  //to cancel customer add
  const cancelAddCustomer=(event)=>{
    event.defaultPrevented();
  }
  return (<div className='container'>
  <h1>We are using git . checking bracnching</h1>
      <div className='app-wrapper'>
          <div>
              <h2 className='title'> Add new Customer</h2>

          </div>
          <form className='form-wrapper' >
                     <div className='name'>
                      <label className='label'>Enter Name</label>
                        <input type="text" id="name" className='input' name='name' value={values.name} onChange={handleChange}/>
                        {errors.name && <p className='error'>{errors.name}</p>}
                      </div>
                      <div className='name'>
                      <label className='label'>Enter Address</label>
                        <input type="text"  id="address" className='input' name='address' value={values.address} onChange={handleChange}/>
                        {errors.address && <p className='error'>{errors.address}</p>}
                      </div>
                      <div className='name'>
                      <label className='label'>Enter Mobile No</label>
                        <input type="number"  id="mobile" className='input' name='mobile' value={values.mobile} onChange={handleChange}/>
                       
                      </div>
                      
                      <div>
                        <button type='submit' className='addCustomer' onClick={handleLogin}>Add Customer</button>
                      <button type='button' className='cancel' onClick={cancelAddCustomer}>Cancel</button>
                      </div>
          </form>

      </div>
     
  </div>);
}

export default AddCustomer;
