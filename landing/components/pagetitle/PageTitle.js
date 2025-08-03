import React from 'react'


const PageTitle = (props) => {
    return (
        <section className="page_banner_section text-center" style={{ backgroundImage: `url(${'/images/shapes/bg_pattern_4.svg'})`,paddingTop:'12rem' }}>
            <div className="container">
                <div className="heading_focus_text text-white">
                    {props.pageTop}
                    <span className="badge bg-secondary">{props.pagesub}</span>
                </div>
                <h1 className="page_title mb-0 text-white">{props.pageTitle}</h1>
            </div>
        </section>
    )
}

export default PageTitle;