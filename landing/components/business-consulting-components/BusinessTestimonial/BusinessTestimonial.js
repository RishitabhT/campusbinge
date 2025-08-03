import React from 'react';
import Slider from "react-slick";
import avatar1 from '/public/images/avatar/1.jpg'
import avatar2 from '/public/images/avatar/2.jpg'
import avatar3 from '/public/images/avatar/3.jpg'
import avatar4 from '/public/images/avatar/4.jpg'
import avatar5 from '/public/images/avatar/5.jpg'
import avatar6 from '/public/images/avatar/6.jpg'
import avatar7 from '/public/images/avatar/7.jpg'

import abImg1 from '/public/images/about/about_image_8.webp'
import abImg2 from '/public/images/icons/icon_wallet.svg'

import Link from 'next/link'
import Image from 'next/image';
const testimonial = [
    {
        id: '01',
        Des: "When I first came to Bangalore, I was unsure about navigating the city. Joining the Campus Binge community gave me confidence and made my transition smooth. Thanks",
        Title: 'Deepanshu Rampuria',
        sub: 'Christ University, Bangalore',
        avatar: avatar1,
    },
    {
        id: '02',
        Des: "What sets Campus Binge apart is the quality of their webinars. The expert speakers have helped me upskill tremendously. Thank you for empowering learners like me!",
        Title: 'Vishakha Tungar',
        sub: 'Christ University, Bangalore',
        avatar: avatar2,
    },
    {
        id: '03',
        Des: "Campus Binge helped me get customized hoodies and jackets for my class. After checking multiple vendors, I found their quality and service to be outstanding!",
        Title: 'Dev Saklani',
        sub: 'Christ University, Bangalore',
        avatar: avatar3,
    },
    {
        id: '04',
        Des: "Campus Binge is the ultimate experience! From epic parties to exciting activities, it keeps the energy high both on and off campus. Truly an unforgettable vibe!",
        Title: 'Soumyashis Bhattacharya',
        sub: 'Christ University, Bangalore',
        avatar: avatar4,
    },
    {
        id: '05',
        Des: "Campus Binge helped me find the perfect and affordable PG in Bengaluru. Their service was excellent, making my accommodation search completely hassle-free!",
        Title: 'Ritwik Joshi',
        sub: 'Christ University, Bangalore',
        avatar: avatar5,
    },
    {
        id: '06',
        Des: "Through Campus Binge, I connected with students from other colleges, collaborated on fests, and raised sponsorships. The networking opportunities are incredible!",
        Title: 'Khushi Kejriwal',
        sub: 'University of Delhi',
        avatar: avatar6,
    },
    {
        id: '07',
        Des: "Bangalore was a new city, college, and experience for me. The Campus Binge community helped me connect with peers, seniors, and alumni, making my journey much easier!",
        Title: 'Samreen Sayeda',
        sub: 'Christ University, Bangalore',
        avatar: avatar7,
    },
];


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
            <div className="container">
                <div className="review_bg_box bg-success" style={{ backgroundImage: `url(${'/images/icons/icon_quote_2.svg'})` }}>
                    <div className="heading_block text-center text-white">
                        <h2 className="heading_text mb-0">
                            Few Stories from our Client
                        </h2>
                    </div>
                    <div className="review_4col_carousel swiper">
                        <Slider ref={slider} {...settings}>
                            {testimonial.map((testimonial, tsm) => (
                                <div className="review_block_3" key={tsm}>
                                    <ul className="rating_block unordered_list">
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    </ul>
                                    <p className="review_commtent">
                                        "{testimonial.Des}"
                                    </p>
                                    <div className="review_admin">
                                        <div className="review_admin_image">
                                            <Image src={testimonial.avatar} alt="Maverick Phoenix" />
                                        </div>
                                        <div className="review_admin_info">
                                            <h4 className="review_admin_name">{testimonial.Title}</h4>
                                            <span className="review_admin_designation">{testimonial.sub}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default BusinessTestimonial;