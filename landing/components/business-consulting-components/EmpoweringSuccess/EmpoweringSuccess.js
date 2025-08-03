import React, { useState } from 'react'
import icon1 from '/public/images/icons/icon_bulb.svg'
import icon2 from '/public/images/icons/icon_user_rating.svg'
import icon3 from '/public/images/icons/icon_hand_shake.svg'
import ModalVideo from 'react-modal-video'
import eImg from '/public/images/about/about.jpg'
import Image from 'next/image'


const EmpoweringSuccess = (props) => {
  const [isOpen, setOpen] = useState(false)
  return (

    <section className="empowering_success_section section_space bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="heading_block text-center">
              <h2 className="heading_text mb-0">
                The Problems We’re Solving 🚀
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="image_wrap position-relative">
              {/* <Image className="rounded" src={eImg} alt="Techco - About" /> */}
              <video autoPlay muted loop>
                <source src='/video/ab.mp4'></source>
              </video>
              <button onClick={() => setOpen(true)} className="video_btn ripple_effect">
                <span className="btn_icon">
                  <i className="fa-solid fa-play"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="empowering_services unordered_list_block ps-lg-5">
              <li>
                <div className="iconbox_block layout_icon_left">
                  <div className="iconbox_icon">
                    <Image src={icon1} alt="Bulb SVG Icon" />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Confusion About College Life</h3>
                    <p className="mb-0">
                      From choosing the right courses to understanding how things work, the transition from school to college can be overwhelming. We provide guidance to make it smooth and stress-free.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="iconbox_block layout_icon_left">
                  <div className="iconbox_icon">
                    <Image src={icon2} alt="User Rating SVG Icon" />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Struggles with Accommodation</h3>
                    <p className="mb-0">
                      Finding a safe, affordable, and convenient PG or hostel is a major challenge for students. We connect you with trusted accommodation options tailored to your needs.                        </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="iconbox_block layout_icon_left">
                  <div className="iconbox_icon">
                    <Image src={icon3} alt="Hand Shake SVG Icon" />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Lack of Community & Opportunities</h3>
                    <p className="mb-0">
                      Many students feel lost without a strong support system. We bring students together, offering networking, events, and sports tournaments to help them grow, connect, and thrive.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="4E3UMfNQNbI" onClose={() => setOpen(false)} />
    </section>
  )
}

export default EmpoweringSuccess;