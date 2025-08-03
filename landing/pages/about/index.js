import React, { Fragment, useState } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import aImg from '/public/images/about/aimg1.jpg'
import aImg2 from '/public/images/about/aimg2.jpg'
import ModalVideo from 'react-modal-video'
import PolicySection from './Policy';
import WhyUs from './WhyUs';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import Image from 'next/image';
import Header3 from '../../components/header3/Header3';
import BusinessFooter from '../../components/business-consulting-components/BusinessFooter/BusinessFooter';
import LeaderTestimonial from '../../components/business-consulting-components/BusinessTestimonial/LeaderTestimonial';


const AboutUsPage = (props) => {

    const [isOpen, setOpen] = useState(false)
    return (
        <Fragment>
            <Header3 />
            <main className="page_content about-page">
                <PageTitle pageTitle={'About Us'} pagesub={''} pageTop={'About'} />
                <section className="intro_about_section section_space bg-light">
                    <div className="intro_about_content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="image_wrap">
                                        <Image src={aImg} alt="Techco - About " />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="image_wrap position-relative">
                                        {/* <Image src={aImg2} alt="Techco - About" /> */}
                                        <video autoPlay>
                                            <source src='/video/tile.mp4'></source>
                                        </video>
                                        <button className="video_btn ripple_effect" onClick={() => setOpen(true)}>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-play"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="heading_block mb-0">
                            <div className="row justify-content-lg-between">
                                <div className="col-lg-4">
                                    <div className="heading_focus_text">
                                        About
                                        <span className="badge bg-secondary text-white">CB 🙂</span>
                                    </div>
                                    <h2 className="heading_text mb-0">
                                        All About Campus Binge
                                    </h2>
                                </div>
                                <div className="col-lg-6">
                                    <p className="heading_description mb-0">
                                        Navigate college life with confidence by building meaningful connections, embracing new experiences, and developing essential skills that set you up for long-term success both academically and personally, creating a strong foundation for your future career and lifelong growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <PolicySection />
                <LeaderTestimonial />
            
                {/* <FeaturesSection /> */}
                {/* <TeamSection /> */}
                {/* <WhyUs /> */}
                <CtaSection />
            </main>
            <BusinessFooter />
        
            <Scrollbar />
            <ModalVideo channel='custom' autoplay isOpen={isOpen} url='/video/tile.mp4' onClose={() => setOpen(false)} />
        </Fragment>
    )
};
export default AboutUsPage;
