import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import icon1 from '/public/images/icons/icon_map_mark_2.svg'
import icon2 from '/public/images/icons/icon_calling_2.svg'
import icon3 from '/public/images/icons/icon_mail_3.svg'
import icon4 from '/public/images/icons/icon_calendar_2.svg'
import Image from 'next/image'


const ContactSection = (props) => {
    return (
        <section className="contact_section section_space bg-light">
            <div className="container">
                <div className="contact_info_box row text-center">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <Image src={icon1} alt="Map Mark SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Location</h3>
                                <p className="mb-0">
                                Binge House, 53, 3rd Cross Rd, Kaveri Layout, S.G. Palya, Bengaluru, Karnataka 560029
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <Image src={icon2} alt="Calling SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Contact</h3>
                                <p className="mb-0">+91 93688 51515                                </p>
                                {/* <div className="mb-0">+88(0) 555-01117</div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <Image src={icon3} alt="User Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Email</h3>
                                <p className="mb-0">founder@campusbinge.com                                </p>
                                {/* <p className="mb-0">gmail.@example.com</p> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <Image src={icon4} alt="Calendar SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Visit Between</h3>
                                <p className="mb-0">Mon - Sat: 8.00-5.00</p>
                                <p className="mb-0">Sunday: Closed</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="section_space pb-0">
                    <div className="row justify-content-lg-between">
                        <div className="col-lg-7">
                            <div className="contact_form mb-0">
                                <h3 className="details_item_info_title mb-1">Send Us A Message</h3>
                                <p className="mb-5">
                                    Give us chance to serve and bring magic to your brand.
                                </p>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="gmap_canvas ps-lg-5">
                                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6209798842465!2d77.60721852549847!3d12.932064687379713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d0292dad21%3A0x3358dd8e566671f3!2sPuzzles%20Living%20Binge%20House!5e0!3m2!1sen!2sin!4v1746327935774!5m2!1sen!2sin"></iframe>
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6209798842465!2d77.60721852549847!3d12.932064687379713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d0292dad21%3A0x3358dd8e566671f3!2sPuzzles%20Living%20Binge%20House!5e0!3m2!1sen!2sin!4v1746327935774!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;