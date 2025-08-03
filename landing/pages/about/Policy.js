import React from 'react';
import sIcon1 from '/public/images/icons/icon_clock.svg'
import sIcon2 from '/public/images/icons/icon_dart_board_2.svg'
import sIcon3 from '/public/images/icons/icon_target.svg'
import Image from 'next/image';

const Policy = [
    {
        title: 'Our Presence',
        subTitle: 'Independent Chapters across multiple colleges — run by students, for students.',
        icon: sIcon1,
    },
    {
        title: 'Our Vision',
        subTitle: 'Create a nationwide student movement built on peer-led support and shared experiences.',
        icon: sIcon2,
    },
    {
        title: 'Our Progress',
        subTitle: 'Incubated at ISB. Recognised by Startup India. Poised to scale across India.',
        icon: sIcon3,
    },


]


const PolicySection = (props) => {

    return (
        <section className="policy_section bg-light">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
                                    <Image src={policy.icon} alt="Dollar SVG Icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">{policy.title}</h3>
                                    <p className="mb-0">
                                        {policy.subTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PolicySection;