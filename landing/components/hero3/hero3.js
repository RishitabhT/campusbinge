import React from 'react';
import Link from 'next/link'
import CountUp from 'react-countup';
// import shape1 from '/public/images/hero/logo_google.svg'
import shape1 from '/public/images/hero/isb-logo.png'
import shape2 from '/public/images/hero/im1.jpg'
import shape3 from '/public/images/hero/business_consulting_hero_image_2.webp'
import icon1 from '/public/images/icons/icon_user_3.svg'
import icon2 from '/public/images/icons/icon_wallet.svg'
import Image from 'next/image';

const Hero3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="business_consulting_hero_section section_decoration mb-0" style={{ backgroundImage: `url(${'/images/hero/business_consulting_hero_section_bg.jpg'})` }}>
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-5">
                        <div className="business_consulting_hero_content">
                            <h1>
                                Navigate <mark><u>Network</u></mark> Succeed
                            </h1>
                            <p>
                            Navigate college life, build meaningful connections, and set yourself up for success—all with Campus Binge!
                            </p>
                            <Link onClick={ClickHandler} className="creative_btn" href="/contact">
                                <span className="btn_label bg-primary">Join Binge Community</span>
                                <span className="btn_icon">
                                    <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                                    <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                                </span>
                            </Link>
                            <div className="google_reviews">
                                <div className="review_admin_logo">
                                    <Image src={shape1} alt="ISB Logo" />
                                </div>
                                <div className="review_info_content">
                                    {/* <ul className="rating_block unordered_list">
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    </ul> */}
                                    <div className="review_counter">Incubated at <b>ISB</b></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="business_consulting_hero_image">
                            <Image className="hero_image" src={shape2} alt="Business Consulting" />
                            <div className="funfact_block capsule_layout wow fadeInUp" data-wow-delay=".1s">
                                <div className="funfact_content">
                                    <div className="counter_value">
                                        <span><CountUp end={10} enableScrollSpy /></span>
                                        <span>+</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Colleges</h3>
                                </div>
                                <div className="funfact_icon">
                                    <Image src={icon1} alt="Techco - SVG Icon User" />
                                </div>
                            </div>
                            <div className="funfact_block middle capsule_layout wow fadeInUp" data-wow-delay=".2s">
                                <div className="funfact_icon">
                                    <Image src={icon2} alt="Techco - SVG Icon Wallet" />
                                </div>
                                <div className="funfact_content">
                                    <h3 className="funfact_title mb-0">Community Strength</h3>
                                    <div className="counter_value">
                                        {/* <span>$</span> */}
                                        <span><CountUp end={10000} enableScrollSpy /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="funfact_block capsule_layout wow fadeInUp" data-wow-delay=".3s">
                                <div className="funfact_content pt-2 pb-1">
                                    <h3 className="funfact_title mb-0 text-center">Cities</h3>
                                    <div className="counter_value justify-content-center">
                                        <span><CountUp end={5} enableScrollSpy /></span>
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="decoration_item shape_1">
                <Image src={shape3} alt="Shape" />
            </div>
        </section>
    )
}

export default Hero3;