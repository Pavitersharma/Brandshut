import React, { useState } from "react";
import product1 from "../images/related2.webp";
import styles  from '../component/Checkout.module.css'

export default function Checkout() {
  const [openx,setOpenx] = useState("")
  const [ismodal,setISmodal] = useState(false)
  return (
    
      <div className="container py-5">
        <div className="row">
          <form className="col-md-8">
            <div className="row mb-3 border p-4">
              <div className="col-md-3">
                <img src={product1} className="img-fluid h-100" />
              </div>
              <div className="col-md-8">
                <h5> Men Printed Round Neck Pure Cotton White T-Shirt</h5>
                <h4>Rs.314/-</h4>
              </div>
            </div>
            <div className="">
              <h3>Delivery</h3>
              <button className="btn btn-primary " onClick={()=>{setISmodal(true)}}> + Address</button>
              <div className="row mt-4">
                <div className="col-md-4 ">
                  <label className="border p-4 rounded d-block">
                    <input type="radio" value={1} name='address' />

                    <strong className="d-block">Delivery To</strong>
                    <h6>Rahul Rana</h6>
                    <span>+91 846263515415</span>
                    <hr />
                    <p>E-86, South Extension Part 1, South Delhi - 110049</p>
                  </label>
                </div>
                <div className="col-md-4 ">
                  <label className="border p-4 rounded d-block" >
                    <input type="radio"  value={1} name='address' />
                    <strong className="d-block" >Delivery To</strong>
                    <h6>Pankaj Sharma</h6>
                    <span>+91 9555199515</span>
                                        <hr />
                                        <p>E-86, South Extension Part 1, South Delhi - 110049</p>
                  </label>
                </div>
                <div className="col-md-4 ">
                <label className="border p-4 rounded d-block" >
                    <input type="radio"  value={1} name='address' />
                    <strong className="d-block" >Delivery To</strong>
                    <h6>Pankaj Sharma</h6>
                    <span>+91 9555199515</span>
                                        <hr />
                                        <p>E-86, South Extension Part 1, South Delhi - 110049</p>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="row mt-3">
                <h3>Payment Method</h3>
                <div className="col-md-8">

                      <label  className="d-block"><input type="radio"  name='payment_method'/> Credit/Debit Card</label>
                      <label className="d-block" ><input type="radio" name='payment_method' value={"Net Banking"} onChange={()=>{setOpenx("cod")}} /> Net Banking</label>
                   
                      <select  className={(openx === 'cod') ? 'form-control form-select w-50 mb-2 show' : 'hide'}   >
                        <option value="">Select bank</option>
                        <option value="">Pnb</option>
                      </select>



                      <div>
                                    <label className='d-block mb-2'>
                                        <input type='radio' name='payment_method' value={'UPI'} onChange={() => { setOpenx('UPI') }} /> UPI
                                    </label>
                                    <input type='text' className={(openx === 'UPI') ? 'form-control w-50 mb-2 show' : 'hide'} placeholder='Enter Your UPI Address'  />
                                </div>

                      <label className="d-block"><input type="radio" /> Wallet</label>
                      <label className="d-block" ><input type="radio" /> Cash on Delivery(COD)</label>
                      
            

                </div>
              </div>
            </div>
            <button className='btn btn-lg btn-warning mt-4'>Place Order</button>
          </form>
          <div className="col-md-4">
            <table className="table table-bordered"> 
              <tr >
                <th className="p-2">Price</th>
                <td>₹450</td>
              </tr>
              <tr>
                <th className="p-2">Shipping</th>
                <td>₹15</td>
              </tr>
              <tr>
                <th className="p-2">Total</th>
                <td>₹465</td>
              </tr>
             
            </table>
            <button className="btn btn-warning">Place Order</button>
          </div>
        </div>
        <div className={(ismodal === true) ? styles.address_modal + ' modal ' : 'modal'}   >

        <div className="modal-dialog">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h5 className="modal-title">Add New Address</h5>
                            <button type="button" className="btn-close"
                                onClick={() => ismodal(false)}
                            ></button>
                        </div>


                        <div className="modal-body">
                            <form>
                                <div className='mb-3'>
                                    <input type='text' className='form-control' placeholder='Enter name' />
                                </div>
                                <div className='mb-3'>
                                    <input type='tel' maxLength={10} className='form-control' placeholder='Phone Number' />
                                </div>
                                <div className='mb-3'>
                                    <input type='text' className='form-control' placeholder='Address Line 1' />
                                </div>
                                <div className='mb-3'>
                                    <input type='text' className='form-control' placeholder='Address Line 2' />
                                </div>
                                <div className='mb-3'>
                                    <input type='text' className='form-control' placeholder='Address Line 3' />
                                </div>
                                <div className='mb-3'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <select name="" id="" className='form-control form-select'>
                                                <option value={''}>Select City</option>
                                                <option value={'New Delhi'}>New Delhi</option>
                                                <option value={'Jaipur'}>Jaipur</option>
                                                <option value={'Kota'}>Kota</option>
                                            </select>
                                        </div>
                                        <div className='col-6'>
                                            <input type='text' className='form-control' placeholder='Pincode' />
                                        </div>
                                    </div>
                                </div>
                                <button className='btn btn-primary'>Add Address</button>
                            </form>
                        </div>


                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={() => ismodal(false)}>Cancel</button>
                        </div>

                    </div>
                </div>

        </div>
      </div>
    
  );
}
