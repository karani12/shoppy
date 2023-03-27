import React from 'react';
import Card from '../widgets/Card';

function Carousel() {
    return (
        // carousel section
        <div className="carousel rounded-box">

            {/* <div className="carousel rounded-box">

            </div> */}
            <div className="carousel rounded-box">
                <div className="carousel-item">
                    <Card
                        image="https://i.pravatar.cc"
                        title="Adidas NMD"
                        description="These bold adidas NMD shoes take the iconic '80s runner and give it a modern makeover. The knit upper has a pixelated design that's inspired by glitch art."
                        category={["Adidas", "Shoes"]}
                        tag={"Sale"}

                    />
                </div>
                <div className="carousel-item">
                    <Card
                        image="https://i.ibb.co/7QpKsCX/adidas-nmd.png"
                        title="Adidas NMD"
                        description="These bold adidas NMD shoes take the iconic '80s runner and give it a modern makeover. The knit upper has a pixelated design that's inspired by glitch art."
                        category={["Adidas", "Shoes"]}
                        tag={"Sale"}

                    />
                </div>
                <div className="carousel-item">
                    <Card
                        image="https://i.ibb.co/7QpKsCX/adidas-nmd.png"
                        title="Adidas NMD"
                        description="These bold adidas NMD shoes take the iconic '80s runner and give it a modern makeover. The knit upper has a pixelated design that's inspired by glitch art."
                        category={["Adidas", "Shoes"]}
                        tag={"Sale"}

                    />
                </div>
                <div className="carousel-item">
                    <Card
                        image="https://i.ibb.co/7QpKsCX/adidas-nmd.png"
                        title="Adidas NMD"
                        description="These bold adidas NMD shoes take the iconic '80s runner and give it a modern makeover. The knit upper has a pixelated design that's inspired by glitch art."
                        category={["Adidas", "Shoes"]}
                        tag={"Sale"}

                    />
                </div>
                <div className="carousel-item">
                    <Card
                        image="https://i.ibb.co/7QpKsCX/adidas-nmd.png"
                        title="Adidas NMD"
                        description="These bold adidas NMD shoes take the iconic '80s runner and give it a modern makeover. The knit upper has a pixelated design that's inspired by glitch art."
                        category={["Adidas", "Shoes"]}
                        tag={"Sale"}

                    />
                </div>
                <div className="carousel-item">
                    <Card
                        image="https://i.ibb.co/7QpKsCX/adidas-nmd.png"
                        title="Adidas NMD"
                        description="These bold adidas NMD shoes take the iconic '80s runner and give it a modern makeover. The knit upper has a pixelated design that's inspired by glitch art."
                        category={["Adidas", "Shoes"]}
                        tag={"Sale"}

                    />
                </div>

            </div>
        </div>

    )
}
export default Carousel;