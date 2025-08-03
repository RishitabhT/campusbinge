import React from 'react';
import Slider from "react-slick";
import avatar1 from '/public/images/avatar/avatar_11.webp'
import avatar2 from '/public/images/avatar/avatar_10.webp'
import avatar3 from '/public/images/avatar/avatar_9.webp'
import avatar4 from '/public/images/avatar/avatar_8.webp'
import abImg1 from '/public/images/about/im2.jpg'
import abImg2 from '/public/images/icons/icon_wallet.svg'

import Link from 'next/link'
import Image from 'next/image';

const testimonial = [
    {
        id: '01',
        Des: "Working with Techco was a game-changer for our business. Their  tailored solutions and dedicated support propelled us to new heights",
        Title: 'Sarah Johnson',
        sub: 'Board Member, UNIQA',
        avatar: avatar1,
    },
    {
        id: '02',
        Des: "Working with Techco was a game-changer for our business. Their  tailored solutions and dedicated support propelled us to new heights",
        Title: 'Adam Pedro',
        sub: 'Board Member, UNIQA',
        avatar: avatar2,
    },
    {
        id: '03',
        Des: "Working with Techco was a game-changer for our business. Their  tailored solutions and dedicated support propelled us to new heights",
        Title: 'Alkira Jemin',
        sub: 'Board Member, UNIQA',
        avatar: avatar3,
    },
    {
        id: '04',
        Des: "Working with Techco was a game-changer for our business. Their  tailored solutions and dedicated support propelled us to new heights",
        Title: 'Adam Pedro',
        sub: 'Board Member, UNIQA',
        avatar: avatar4,
    },
    {
        id: '05',
        Des: "Working with Techco was a game-changer for our business. Their  tailored solutions and dedicated support propelled us to new heights",
        Title: 'Adam Pedro',
        sub: 'Board Member, UNIQA',
        avatar: avatar2,
    },
]

const BusinessTestimonial = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slider = React.useRef(null);



    return (
        <section className="review_and_about_section section_space bg-light">
            <div className="section_space pb-0">
                <div className="container">
                    <div className="row align-items-center justify-content-lg-around">
                        <div className="col-lg-6">
                            <div className="heading_block">
                                <h2 className="heading_text">
                                    Why Choose Campus Binge?<br></br>Your Campus Wingman
                                </h2>
                                <p className="heading_description text-dark pe-lg-5">
                                    Because college life should be exciting, not overwhelming! At Campus Binge, we’re more than just a platform—we’re your go-to guide, mentor, and support system.                                </p>
                                <p className="heading_description mb-0 text-dark pe-lg-5">
                                    Welcome to a stress-free, fun, and fulfilling college experience—welcome to Campus Binge! 🚀                                </p>
                            </div>
                            <Link onClick={ClickHandler} className="creative_btn" href="/contact">
                                <span className="btn_label bg-primary">Join Binge Community</span>
                                <span className="btn_icon">
                                    <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                                    <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                                </span>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <div className="about_image_3">
                                <Image className="image_wrap" src={abImg1} alt="Business Consulting" />
                                <div className="funfact_block capsule_layout">
                                    <div className="funfact_icon">
                                        <Image src={abImg2} alt="Techco - SVG Icon Wallet" />
                                    </div>
                                    <div className="funfact_content">
                                        <h3 className="funfact_title mb-0">Community</h3>
                                        <div className="counter_value">
                                            <span></span>
                                            <span className="odometer" data-count="10000">10000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessTestimonial;