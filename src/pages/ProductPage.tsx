import React, { useEffect, useState } from "react";
import { getProduct } from "../utils/api";
import { Product } from "../../types/product";
import Button from "../components/common/Button";
function ProductPage() {

    const [product, setProduct] = useState<Product>();
    const [quantity, setQuantity] = useState<number>(1);

    const AddToCart = () => {

    };
    useEffect(() => {
        const id = window.location.pathname.split("/")[2];
        getProduct(id).then((res) => {
            console.log(res);
            setProduct(res);
        });

    }, []);


    return (
        <div className="m-auto flex items-center md:h-screen bg-white p-4">
            <div  className="flex flex-col md:flex-row md:w-2/3 justify-around">

            {/* product image */}
            <div className="md:w-1/3">
                <figure>
                    <img className="md:h-1/3 " src={product?.image} alt="" />
                </figure>
            </div>

            {/* product name */}
            <div  className="md:w-1/3 flex  flex-col justify-around">
                <div>
                    <h1 className="font-black text-2xl pb-3">{product?.title}</h1>
                    <p>{product?.description}</p>

                    <div>
                        <p className="font-bold text-lg pt-4">${product?.price}</p>
                        <div className="badge badge-outline rounded-md">{product?.category}</div>
                    </div>
                </div>
                <p className="ml-3 mt-4">Quantity</p>
                    <input type="number" placeholder="2" className="ml-3  text-black border m-auto p-2 border-black rounded-md w-12 h-12 " />
                <div className=" pt-4 pb-3 flex items-center">
                    <button  name="Add to cart"  className="btn btn-secondary" onClick={AddToCart}>Add To Cart</button>
                   
                </div>
            </div>
            </div>
        </div>
    );
}

export default ProductPage;