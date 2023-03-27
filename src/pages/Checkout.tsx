import React, {useEffect} from "react";
import CartCard from "../components/common/CartCard";
import { getCartItems } from "../utils/api";


function Checkout() {
  useEffect(() => {
  }, [])
  return (
    <div className="flex flex-col items-center min-h-screen">
      {
        getCartItems().map((item, index) => {
          return <CartCard 
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            id={item.id}
            category={item.category}
            tag={item.tag}
            price={item.price}
            rating={item.rating}
            inCart={item.inCart}
            quantity={item.quantity}
          />
        })
      }
    
    </div>
  );
}

export default Checkout