import React, { useState } from "react";
import Shirt1 from "../images/shirt1.webp";
import shirt2 from "../images/shirt2.jpeg";
import shirt3 from "../images/shirt3.webp";
import shirt4 from "../images/shirt4.avif";
import shirt5 from "../images/shirt5.avif";
import Relatedproducts from "./Relatedproducts";


export default function Product() {

    const [image,setImage] = useState(Shirt1)

  return (
    <div className="text-black">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4">
            {" "}
            <img
              src={image}
              alt=""
              className="img-fluid"
              style={{ width: "100%", height: "500px", objectFit: "contain" }}
            />
            <hr />
            <div className="d-flex">
            <img src={shirt2}  className="img-fluid" style={{ width: "100%", height: "180px", objectFit: "contain" } } onClick={(e)=>{setImage(e.target.src)}} />
              
            <img src={shirt3} alt="" className="img-fluid" style={{ width: "100%", height: "180px", objectFit: "contain" } } onClick={(e)=>{setImage(e.target.src)}} />
            <img src={shirt4} alt=""  className="img-fluid" style={{ width: "100%", height: "180px", objectFit: "contain" }  } onClick={(e)=>{setImage(e.target.src)}}/>
            <img src={shirt5} alt="" className="img-fluid" style={{ width: "100%", height: "180px", objectFit: "contain" } } onClick={(e)=>{setImage(e.target.src)}} />

            </div>
           
          </div>
          <div className="col-md-6">
            <div className="mt-4">
                <h2>Roadster </h2>
                <h1 className="display-6 text-black fw-bold">Men Regular Fit Solid Spread Collar Casual Shirt</h1>
                <h3 className="text-dark">₹705 <del className="h5">₹1499</del> <span className="text-success h5">52%off</span> </h3>
                <hr />
                <h4 className="text-black fw-bold">Available Offer</h4>
                <ul>
                    <li>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</li>
                    <li>Bank OfferFlat ₹500 off on RuPay Credit Card EMI Transactions, on orders of ₹15,000 and aboveT&C</li>
                    <li>Bank Offer10% off up to ₹1,200 on HDFC Bank Credit Card EMI on 6 and 9 months tenure. Min Txn Value: ₹5000T&C</li>
                    <li>Bank Offer10% off up to ₹1,500 on HDFC Bank Credit Card EMI on 12months and above tenure. Min Txn Value:₹5000</li>
                </ul>
                <hr />
                <h4>Product details</h4>
                                    <table className='table' style={{ maxWidth: 400 }}>
                        <tr>
                            <th>Pack of</th>
                            <td>1</td>
                        </tr>
                        <tr>
                            <th>Style Code</th>
                            <td>14640802</td>
                        </tr>
                        <tr>
                            <th>Fit</th>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th>Fabric</th>
                            <td>Pure Cotton</td>
                        </tr>
                        <tr>
                            <th>Sleeve</th>
                            <td>Full Sleeve</td>
                        </tr>
                        <tr>
                            <th>Pattern</th>
                            <td>Solid</td>
                        </tr>
                        <tr>
                            <th>Reversible</th>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th>Collar</th>
                            <td>Spread</td>
                        </tr>
                    </table>
                                                 
            </div>
          </div>

          <hr />
        </div>
        <div className="row">
        <h4>Additional Details</h4>
        <table className='table table-bordered' >
                        <tr>
                            <th >Pack of</th>
                            <td>1</td>
                        </tr>
                        <tr>
                            <th>Style Code</th>
                            <td>14640802</td>
                        </tr>
                        <tr>
                            <th>Fit</th>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th>Fabric</th>
                            <td>Pure Cotton</td>
                        </tr>
                        <tr>
                            <th>Sleeve</th>
                            <td>Full Sleeve</td>
                        </tr>
                        <tr>
                            <th>Pattern</th>
                            <td>Solid</td>
                        </tr>
                        <tr>
                            <th>Reversible</th>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th>Collar</th>
                            <td>Spread</td>
                        </tr>
                    </table>

        </div>
        <hr />
        <Relatedproducts/>
      </div>
    </div>
  );
}
