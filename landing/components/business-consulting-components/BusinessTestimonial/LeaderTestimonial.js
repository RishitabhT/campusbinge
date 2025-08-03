import React from 'react';
import Slider from "react-slick";
import avatar1 from '/public/images/avatar/1.jpg'
import avatar2 from '/public/images/avatar/2.jpg'
import avatar3 from '/public/images/avatar/3.jpg'
import avatar4 from '/public/images/avatar/4.jpg'
import avatar5 from '/public/images/avatar/5.jpg'
import avatar6 from '/public/images/avatar/6.jpg'
import avatar7 from '/public/images/avatar/7.jpg'


import sImg3 from '/public/images/icons/icon_linkedin.svg'
import sImg4 from '/public/images/icons/icon_instagram.svg'
import abImg1 from '/public/images/about/about_image_8.webp'
import abImg2 from '/public/images/icons/icon_wallet.svg'

import Link from 'next/link'
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
const testimonial = [
    {
        id: '01',
        Des: "When I first came to Bangalore, I was unsure about navigating the city. Joining the Campus Binge community gave me confidence and made my transition smooth. Thanks",
        Title: 'Deepanshu Rampuria',
        sub: 'Christ University, Bangalore',
        avatar: avatar1,
    },
];


const LeaderTestimonial = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
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
                            A word from our founder
                        </h2>
                    </div>
                    <div className="review_4col_carousel swiper" style={{ borderRadius: '2px', padding: '20px' }}>
                        <div className='container row' style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0e0e0e54', borderRadius: '10px', padding: '20px' }}>
                            {/* <Image src={'/images/about/about.jpg'} alt="Leader" /> */}
                            <div className='col-sm-8'>
                                <Typography variant='h6' style={{color:'white'}}>" We started Campus Binge because we felt the gaps no one talks about — the loneliness, the confusion, the pressure when you step into college. This isn’t just a community; it’s the elder sibling we all wish we had. And together, we’re building something that every student in India can lean on. "</Typography>
                                <br />
                                <Typography variant='h6 mt-4 pt-4' style={{ fontWeight: 'bold', fontSize: '20px',color:'white' }}>-  Rishitabh, Founder & CEO , Campus Binge</Typography>
                                <br />
                                <br />
                                <br />
                                <ul className="social_icons_block unordered_list">
                                    
                                    <li>
                                        <Link target='_blank' onClick={ClickHandler} href={'https://www.linkedin.com/in/rishitabh-thapliyal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} style={{width:'15rem'}}>
                                            <Image src={sImg3} alt="Icon Linkedin" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target='_blank' onClick={ClickHandler} href={'https://www.instagram.com/rishitabh?igsh=ampibTVyaGV5NXJ4'} style={{width:'15rem'}}>
                                            <Image src={sImg4} alt="Icon Instagram" />
                                        </Link>
                                    </li>
                                </ul>
                                

                            </div>
                            <div className='col-sm-4'>
                                <img src={'/images/rishitabh.jpg'} width={'100%'} height={'100%'} alt="Leader" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default LeaderTestimonial;