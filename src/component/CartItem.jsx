import React, { useState } from "react";
import item1 from "../images/list 1.webp";
import Checkout from "./Checkout";

export default function CartItem() {
  let [qty, setQty] = useState(1);
  return (
    <div>
      <div className="  cart mt-2 ">
        <div className="row mb-4 ">
          <div className="col-md-2 ">
            <img src={item1} className="img-fluid  h-100" />
          </div>
          <div className="col-md-5">
            <div className="list-item-description p-3">
              <div>
                <h4>Roadster </h4>
                <h5 className="fw-bold" style={{ lineHeight: 1.3 }}>
                  Men Printed Round Neck Pure Cotton White T-Shirt
                </h5>
                <p className="text-success">Special Price</p>
              </div>

              <div className="qty mt-2">
                <button >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-trash-2"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setQty(--qty);
                  }}
                >
                  -
                </button>
                <span>{qty}</span>

                <button
                  onClick={() => {
                    setQty(qty + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="list-item-pricing">
              <h3 className="fw-bold ">
                Rs. {Math.round(250 - (250 / 100) * 14)}/-
              </h3>
              <span>
                <del className=" text-danger fw-semibold">Rs.{250}-</del>{" "}
                <span className="badge bg-success">{14}% Off</span>
              </span>
            </div>
          </div>
         
        </div>
       
      </div>
    </div>
  );
}
