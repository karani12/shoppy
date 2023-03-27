import React from "react";
import Button from "../common/Button";

function Hero() {
    return (
        <div className="flex justify-around items-center h-1/5">
            <div className="welcome flex flex-col items-center">
                <h1 className="text-5xl font-black text-center md:text-left mb-5">Welcome to Shoppy</h1>
                <p className=" mb-3 text-center md:text-center">Your one stop shop</p>
                <a href="/#products">

                <button  name="Start Viewing" className="btn btn-secondary m-auto">Start Viewing</button>
                </a>
            </div>
            {/* image */}

            <figure>
                <img className="hidden md:block md:w=3/6" src="./e.svg" alt="shopping illustration" />
            </figure>

        </div>
    )
}
export default Hero;