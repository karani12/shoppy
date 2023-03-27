import React from "react";
import { CardProps } from "../../../types/card";
import Button from "../common/Button";

function Card(props: CardProps) {
    return(
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={props.image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
               {props.title}
                <div className="badge badge-secondary">{props.tag.toUpperCase()}</div>
            </h2>
            <p>{props.description}</p>
            <Button type="secondary" name="View" />
            <div className="card-actions justify-end">
                {
                    props.category.map((item, index) => {
                        return <div key={index} className="badge badge-outline">{item}</div>
                    })
                }
              
            </div>
        </div>
    </div>
    )
}

export default Card;