import React from 'react';
import Link from 'next/link'

const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="calltoaction_section parallaxie" style={{ backgroundImage: `url(${'/images/backgrounds/ctabg.jpg'})` }}>
            <div className="container text-center">
                <div className="heading_block text-white">
                    <h2 className="heading_text">
                        Be part of the Binge Community, Lets Connect!
                    </h2>
                    <p className="heading_description mb-0">
                    Whether you’re a student looking to join a Chapter, a college ready to collaborate, or someone who believes in the power of community — we’d love to hear from you.
                    </p>
                </div>
                <Link onClick={ClickHandler} href="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="Contact Us Today!">Contact Us Today!</span>
                    <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                </Link>
            </div>
        </section>
    );
}

export default CtaSection;