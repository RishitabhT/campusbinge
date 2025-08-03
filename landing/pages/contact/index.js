import React, { Fragment } from 'react';
import Header3 from '../../components/header3/Header3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ContactSection from '../../components/ContactSection';
import BusinessFooter from '../../components/business-consulting-components/BusinessFooter/BusinessFooter';

const ContactPage = (props) => {

    return (
        <Fragment>
            <Header3 />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Contact Us'} pagesub={'Us 😍'} pageTop={'Contact'} />
                <ContactSection />
                <CtaSection />
            </main>
            <BusinessFooter />
            <Scrollbar />
        </Fragment>
    )
};

export default ContactPage;