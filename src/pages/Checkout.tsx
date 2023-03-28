import React, {useEffect} from "react";
import CartCard from "../components/common/CartCard";
import { getCartItems } from "../utils/api";
import { useStateValue } from "../global";


function Checkout() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({
      type: 'CALCULATE_TOTAL',
      total: getCartItems().reduce((total: number, item: any) => total + item.price * item.quantity, 0)
    })
    
    dispatch({
      type: 'ADD_TO_CART',
      item: getCartItems()
    })



  }, [])
  return (
    <div className="flex flex-col items-center min-h-screen">
      {
        getCartItems().map((item: { title: string; image: string; description: string; id: string; category: string; tag: string; price: number; rating: number; inCart: boolean; quantity: number; }, index: React.Key | null | undefined) => {
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
      <button className="btn btn-secondary w-1/3">Checkout</button>
    </div>
  );
}

export default Checkout