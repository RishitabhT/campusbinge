import React from 'react';
import Services from '../../../api/service'
import Link from 'next/link'
import Image from 'next/image';


const ConsultingService = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="business_consulting_service_section section_space" style={{ backgroundImage: `url(${'/images/backgrounds/grad.jpg'})` }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="heading_block text-center">
                            <h2 className="heading_text">
                            Everything You Need for an Epic College Life!
                            </h2>
                            <p className="heading_description mb-0 text-dark">
                                {/* Driving Growth and Innovation Through Customized Strategies */}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="business_consulting_services row">
                    {Services.slice(11, 17).map((service, srv) => (
                        <div className="col-lg-4 p-4" key={srv}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
                                    <Image src={service.sImg} alt="Techco - Service icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">
                                        <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>
                                            {service.title}
                                        </Link>
                                    </h3>
                                    <p className="mb-0">
                                        Our consulting services are customized to suit the unique needs and  goals of each client, ensuring precise alignment with their business  objectives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="btns_group pb-0">
                    <Link onClick={ClickHandler} className="creative_btn" href="/contact">
                        <span className="btn_label bg-primary">Get Started Today</span>
                        <span className="btn_icon">
                            <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                            <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ConsultingService;