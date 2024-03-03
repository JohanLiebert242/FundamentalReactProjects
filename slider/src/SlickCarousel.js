import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { list } from "./data";

import { FaQuoteRight } from "react-icons/fa";

function SlickCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <section className="slick-container">
            <Slider {...settings}>
                {list.map((item, index) => (
                    <article key={index}>
                        <img
                            className="person-img"
                            alt={item.name}
                            src={item.image}
                        />
                        <span className="name">{item.name}</span>
                        <p className="title">{item.title}</p>
                        <p className="text">{item.quote}</p>
                        <FaQuoteRight className="icon" />
                    </article>
                ))}
            </Slider>
        </section>
    );
}

export default SlickCarousel;
