import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '/public/images/clients/1.png'
import pimg2 from '/public/images/clients/2.png'
import pimg3 from '/public/images/clients/3.png'
import pimg4 from '/public/images/clients/4.png'
import pimg5 from '/public/images/clients/5.png'
import pimg6 from '/public/images/clients/6.png'
import pimg7 from '/public/images/clients/7.png'
import Image from "next/image";

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg2,
    },
]

var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,

    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};



const PartnerSection = (props) => {

    return (
        <section className="client_logo_section section_space bg-transparent mb-0">
            <div className="container">
                <div className="heading_block text-center">
                    <h2 className="heading_text mb-0">
                        "Awards and Recognitions"
                    </h2>
                </div>
                <div className="client_logo_carousel swiper no_style">
                    <Slider {...settings}>
                        {partners.map((partner, pitem) => (
                            <div className="client_logo_item" key={pitem}>
                                <Image src={partner.pImg} alt="Techco - Client Logo" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;