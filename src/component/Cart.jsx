import React from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export default function Cart() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="col-md-4  mt-4">
        
            <h4>Total:Rs.500/-</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt deleniti nisi impedit omnis reiciendis culpa commodi quaerat? Enim, nobis esse sequi, saepe repellat, temporibus aliquid totam illo quisquam eveniet inventore?</p>
            <button className='btn btn-warning'>Checkout</button>
        </div>
        
      </div>
    </div>
  );
}
