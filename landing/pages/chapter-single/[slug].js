import React, { Fragment } from 'react';
import Teams from '../../api/team'
import CountUp from 'react-countup';
import { useRouter } from 'next/router'
import Link from "next/link";
import Image from 'next/image';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import sImg1 from '/public/images/icons/icon_facebook.svg'
import sImg2 from '/public/images/icons/icon_twitter_x.svg'
import sImg3 from '/public/images/icons/icon_linkedin.svg'
import sImg4 from '/public/images/icons/icon_instagram.svg'
import Header3 from '../../components/header3/Header3';
import BusinessFooter from '../../components/business-consulting-components/BusinessFooter/BusinessFooter';

const ChapterSinglePage = (props) => {
    const router = useRouter()

    const TeamDetails = Teams.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header3 />
            <main className="page_content about-page">
                <PageTitle pageTitle={TeamDetails?.name} pagesub={''} pageTop={'Chapter'} />
                <section className="team_details_section section_space " style={{backgroundImage: "url('/images/backgrounds/grad.jpg')",backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
                    <div className="container">
                        <div className="team_member_details_card">
                            <div className="team_member_image">
                                <Image src={TeamDetails?.presidentImg} alt="Team Member" />
                            </div>
                            <div className="team_member_content">
                                <h2 className="team_member_name">President</h2>
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Name: </strong>
                                            {TeamDetails?.president}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Course: </strong>
                                            {TeamDetails?.presidentCourse}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Year: </strong>
                                            {TeamDetails?.presidentYear}
                                        </span>
                                    </li>
                                    
                                </ul>
                                <div className="social_wrapper">
                                    <h3 className="social_title">Social Media</h3>
                                    <ul className="social_icons_block unordered_list">

                                        <li>
                                            <Link onClick={ClickHandler} href={`${TeamDetails?.presidentLinkedin}`} target="_blank" rel="noopener noreferrer">
                                                <Image src={sImg3} alt="Icon Linkedin" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href={`${TeamDetails?.presidentInsta}`} target="_blank" rel="noopener noreferrer">
                                                <Image src={sImg4} alt="Icon Instagram" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="team_member_details_card">
                            <div className="team_member_image">
                                <Image src={TeamDetails?.vicePresidentImg} alt="Team Member" />
                            </div>
                            <div className="team_member_content">
                                <h2 className="team_member_name">Vice President</h2>
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Name: </strong>
                                            {TeamDetails?.vicePresident}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Course: </strong>
                                            {TeamDetails?.vicePresidentCourse}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Year: </strong>
                                            {TeamDetails?.vicePresidentYear}
                                        </span>
                                    </li>
                                    
                                </ul>
                                <div className="social_wrapper">
                                    <h3 className="social_title">Social Media</h3>
                                    <ul className="social_icons_block unordered_list">

                                        <li>
                                            <Link onClick={ClickHandler} href={`${TeamDetails?.vicePresidentLinkedin}`} target="_blank" rel="noopener noreferrer">
                                                <Image src={sImg3} alt="Icon Linkedin" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href={`${TeamDetails?.vicePresidentInsta}`} target="_blank" rel="noopener noreferrer">
                                                <Image src={sImg4} alt="Icon Instagram" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        




                    </div>
                </section>
                <CtaSection />
            </main>
            <BusinessFooter />
            <Scrollbar />
        </Fragment>
    )
};
export default ChapterSinglePage;