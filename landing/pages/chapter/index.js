import React, { Fragment } from 'react';
import Link from "next/link";
import Teams from '../../api/team'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import tImg from '/public/images/team/team_cartoon_image.webp'
import sImg1 from '/public/images/icons/icon_facebook.svg'
import sImg2 from '/public/images/icons/icon_twitter_x.svg'
import sImg3 from '/public/images/icons/icon_linkedin.svg'
import sImg4 from '/public/images/icons/icon_instagram.svg'
import Image from 'next/image';
import Header3 from '../../components/header3/Header3';
import BusinessFooter from '../../components/business-consulting-components/BusinessFooter/BusinessFooter';

const TeamPage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <Header3 />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Our Chapters'} pagesub={''} pageTop={'Binge Team Campus Ambassadors'} />

                <section className="team_section section_space" style={{backgroundImage: "url('/images/backgrounds/grad.jpg')",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                    <div className="container">
                        {/* <div className="heading_block text-center">
                            <div className="heading_focus_text">
                                <span className="badge bg-secondary text-white">Our Expert</span>
                                Team Members 😍
                            </div>
                            <h2 className="heading_text mb-0">
                                Top Skilled Experts
                            </h2>
                        </div> */}

                        <div className="row">
                            {Teams.slice(0, 6).map((team, tm) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={tm}>
                                    <div className="team_block">
                                        <div className="team_member_image">
                                            <Link onClick={ClickHandler} className="image_wrap" aria-label="Team Details Button" href={'/chapter-single/[slug]'} as={`/chapter-single/${team.slug}`}>
                                                <Image src={team.tImg} alt="" />
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                        <div className="team_member_info">
                                            <h3 className="team_member_name">
                                                <Link onClick={ClickHandler} href={'/chapter-single/[slug]'} as={`/chapter-single/${team.slug}`}>{team.name}</Link>
                                            </h3>
                                            <h4 className="team_member_designation">{team.title}</h4>
                                            <Link onClick={ClickHandler} className="creative_btn" href={``}>
                                                <span className="btn_label bg-primary">Instagram</span>
                                                <span className="btn_icon">
                                                    <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                                                    <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                                                </span>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <CtaSection />
            <BusinessFooter />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;
