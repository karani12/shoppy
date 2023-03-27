import React from "react";
import Hero from "../components/sections/Hero";
import Products from "../components/common/Product";
import Footer from "../components/sections/Footer";


function Home() {
    return (
        <div>
            <div>
            <Hero />

            </div>
            <div>

        <Products />
            </div>
            <div>
            </div>
        </div>
    );
}

export default Home;