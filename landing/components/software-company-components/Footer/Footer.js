import React from 'react'
import Link from 'next/link'
import icon1 from '/public/images/shapes/shape_space_2.svg'
import icon2 from '/public/images/icons/icon_mail_2.svg'
import Slider from "react-slick";
import Image from 'next/image';

const ClickHandler = () => {
  window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
  e.preventDefault()
}

var settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,

  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Footer = (props) => {
  return (
    <footer className="site_footer footer_layout_2 section_decoration" style={{ backgroundImage: `url(${'/images/shapes/bg_pattern_3.svg'})` }}>
      <div className="decoration_item shape_image_1">
        <Image src={icon1} alt="Techco Shape" />
      </div>
      <div className="container">
        <div className="service_pill_carousel swiper">
          <Slider {...settings}>
            <div className="swiper-slide">
              <Link onClick={ClickHandler} href="/home_software_company" className="service_pill_block">
                <i className="fa-solid fa-check"></i>
                <span>Custom Web Apps</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link onClick={ClickHandler} href="/home_software_company" className="service_pill_block">
                <i className="fa-solid fa-check"></i>
                <span>App Development</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link onClick={ClickHandler} href="/home_software_company" className="service_pill_block">
                <i className="fa-solid fa-check"></i>
                <span>Web Development</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link onClick={ClickHandler} href="/home_software_company" className="service_pill_block">
                <i className="fa-solid fa-check"></i>
                <span>Software Solution</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link onClick={ClickHandler} href="/home_software_company" className="service_pill_block">
                <i className="fa-solid fa-check"></i>
                <span>Enterprise Apps</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link onClick={ClickHandler} href="/home_software_company" className="service_pill_block">
                <i className="fa-solid fa-check"></i>
                <span>Devops Services</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link onClick={ClickHandler} href="/home_software_company" className="service_pill_block">
                <i className="fa-solid fa-check"></i>
                <span>Custom Web Apps</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link onClick={ClickHandler} href="/home_software_company" className="service_pill_block">
                <i className="fa-solid fa-check"></i>
                <span>App Development</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link onClick={ClickHandler} href="/home_software_company" className="service_pill_block">
                <i className="fa-solid fa-check"></i>
                <span>Web Development</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link onClick={ClickHandler} href="/home_software_company" className="service_pill_block">
                <i className="fa-solid fa-check"></i>
                <span>Software Solution</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link onClick={ClickHandler} href="/home_software_company" className="service_pill_block">
                <i className="fa-solid fa-check"></i>
                <span>Enterprise Apps</span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link onClick={ClickHandler} href="/home_software_company" className="service_pill_block">
                <i className="fa-solid fa-check"></i>
                <span>Devops Services</span>
              </Link>
            </div>
          </Slider>
        </div>
        <div className="footer_main_content">
          <div className="row justify-content-lg-between">
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Company</h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <Link onClick={ClickHandler} href="/about">
                      <span className="icon_list_text">
                        About
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/portfolio">
                      <span className="icon_list_text">
                        Our achievements
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/about">
                      <span className="icon_list_text">
                        Our partners
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/contact">
                      <span className="icon_list_text">
                        Our locations
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/portfolio">
                      <span className="icon_list_text">
                        Careers
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/contact">
                      <span className="icon_list_text">
                        Contacts
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Expertise</h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <Link onClick={ClickHandler} href="/home_software_company">
                      <span className="icon_list_text">
                        Cloud solutions
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/home_software_company">
                      <span className="icon_list_text">
                        Data warehouse
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/home_software_company">
                      <span className="icon_list_text">
                        Data management
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/home_software_company">
                      <span className="icon_list_text">
                        BI services
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/home_software_company">
                      <span className="icon_list_text">
                        Big data
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/home_software_company">
                      <span className="icon_list_text">
                        Data science
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Industries</h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <Link onClick={ClickHandler} href="/contact">
                      <span className="icon_list_text">
                        Insurance
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/home_software_company">
                      <span className="icon_list_text">
                        Banking
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/service">
                      <span className="icon_list_text">
                        Fintech
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/home_software_company">
                      <span className="icon_list_text">
                        Logistics
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/service">
                      <span className="icon_list_text">
                        Retail
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/portfolio">
                      <span className="icon_list_text">
                        Healthcare
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer_widget pe-lg-3">
                <h2 className="footer_info_title">Newsletter</h2>
                <p>
                  Sign up to Techco weekly newsletter to get the latest updates.
                </p>
                <form className="footer_newslatter_2" onSubmit={SubmitHandler}>
                  <label htmlFor="footer_mail_input">
                    <Image src={icon2} alt="Mail SVG Icon" />
                  </label>
                  <input id="footer_mail_input" type="email" name="email" placeholder="Enter your email" />
                  <button type="submit">Send</button>
                </form>



                <ul className="social_icons_block unordered_list">
                  <li>
                    <Link onClick={ClickHandler} href="/home_software_company">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/home_software_company">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/home_software_company">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/home_software_company">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom" style={{ backgroundImage: `url(${'/images/shapes/shape_space_6.svg'})` }}>
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">
            Copyright © 2024 Techco, All rights reserved.
          </p>
          <ul className="icon_list unordered_list">
            <li>
              <Link onClick={ClickHandler} href="/contact">
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle"></i>
                </span>
                <span className="icon_list_text">
                  Terms of Up
                </span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/contact">
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle"></i>
                </span>
                <span className="icon_list_text">
                  Privacy Policy
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;