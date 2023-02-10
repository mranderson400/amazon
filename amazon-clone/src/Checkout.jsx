import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal"; 

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout_title">Your shopping basket</h2>
        </div>
      </div>

        <div className="checkout_right">
            <Subtotal />
          <h2>Sub total</h2>
        </div>
    </div>
  );
}

export default Checkout;
