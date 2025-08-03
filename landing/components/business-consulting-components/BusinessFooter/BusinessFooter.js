import React from 'react'
import Link from 'next/link'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const BusinessFooter = (props) => {
    return (
        <footer className="site_footer footer_layout_3">
        
        <div className="footer_bottom text-white" style={{background: '#000'}}>
          <div className="container d-md-flex align-items-md-center justify-content-md-between">
            <p className="copyright_text m-0 py-4">
              Copyright © 2024 Campus Binge, All rights reserved.
            </p>
            <p className="copyright_text m-0">
              Developed by <Link onClick={ClickHandler} href="/" target="_blank">Windikate</Link>
            </p>
          </div>
        </div>
      </footer>
    )
}

export default BusinessFooter;