import React, {useEffect} from "react";
import { removeFromCart } from "../../utils/api";
import {Product} from '../../../types/product';

function CartCard(props: Product) {
    
    return (

        <div className="card card-side md:w-3/6 bg-base-100 shadow-xl m-3 ">
            <figure><img src={props.image} className="h-40 w-40 object-contain" alt={props.title}/></figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{`The  ${props.title} costs ${props.price}`}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-error" onClick={(e)=>{
                        e.preventDefault();
                        removeFromCart(props)
                    }}>Remove</button>
                </div>
            </div>
        </div>


    )
}

export default CartCard;