import React from "react";
import { CardProps } from "../../../types/card";
import Button from "../common/Button";

function Card(props: CardProps) {
    return(
    <div className="card w-96 bg-white shadow-xl m-2">
        <figure
        className="h-64 bg-gray-100 "><img src={props.image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title line-clamp-1 text-left">
               {props.title}
            </h2>
            <div className="badge badge-secondary">{props.tag}</div>

            <p className="line-clamp-2 text-left">{props.description}</p>
            <Button type="secondary" name="View" />
            <div className="card-actions justify-end">
                <div  className="badge badge-outline rounded-md">{props.category}</div>
            </div>
        </div>
    </div>
    )
}

export default Card;