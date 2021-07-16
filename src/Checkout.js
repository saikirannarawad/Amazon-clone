import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h1>Your Shopping Basket is empty</h1>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add To Basket" next to item{" "}
            </p>
          </div>
        ) : (
          <div>
            <h2 className=" checkout__title">Your Shopping Basket </h2>
            {basket.map((iteam) => (
              <CheckoutProduct
                id={iteam.id}
                title={iteam.title}
                image={iteam.image}
                price={iteam.price}
                rating={iteam.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="Checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
