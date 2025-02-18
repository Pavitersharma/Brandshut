import React from 'react'
import item1 from '../images/list 1.webp'
import AddtoCart from './AddtoCart'


export default function ListingItem({price,discount}) {
  return (
    <div className='list-item border  rounded mb-3'>
    <div className="container mt-4 p-4">
    <div className='row'>
         <div className='col-md-4'>
             <img src={item1} className='img-fluid  h-100' />
         </div>
         <div className='col-md-8'>
             <div className='list-item-description p-3'>
                 <div>
                     <h4>Roadster </h4>
                     <h5 className='fw-bold' style={{ lineHeight:1.3 }}>Men Printed Round Neck Pure Cotton White T-Shirt</h5>
                     <p className='text-success'>Special Price</p>
                     
                     
                     
                 </div>
                 <div className='list-item-pricing'>
                     <h3 className='fw-bold '>Rs. {Math.round(price - ((price/100)*discount))}/-</h3>
                     <span><del className=' text-danger fw-semibold'>Rs.{price}-</del> <span className='badge bg-success'>{discount}% Off</span></span>
                     <div className='' style={{ fontSize:13 }}>
                         <i>Inclusive of All Txs</i>
                     </div>
                     <div className=''>
                         <p><strong>Delivered by tomorrow 1PM</strong></p>
                     </div>
                 </div>
                 <div className="list-item-size">
                     <h5>Available offers</h5>
                     <ul>
                         <li className='list-style-none'>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</li>
                         <li>Bank OfferFlat ₹500 off on RuPay Credit Card EMI Transactions, on orders of ₹15,000 and aboveT&C</li>
                         <li>Bank Offer10% off up to ₹1,200 on HDFC Bank Credit Card EMI on 6 and 9 months tenure. Min Txn Value: ₹5000T&C</li>
                         <li>
                         Special PriceGet extra 54% off (price inclusive of cashback/coupon)T&C
                         </li>
 
                     </ul>
                 </div>
                 <AddtoCart/>
             </div>
         </div>
     </div>
    </div>
 </div>
  )
}
