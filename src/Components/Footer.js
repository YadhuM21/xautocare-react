import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="footer_top container">
          <div className="row">
            <div className="col-lg-6">
              <img className='imagelogo' src="https://www.xautocare.com/wp-content/uploads/2020/07/All-white-01-300x117.png" alt="" />
              <p>X AutoCare is your absolute best source for used auto parts in United States Of America.</p>
              <div style={{marginBottom : "30px"}} className="row">
                <div className="col-md-6">
                  <h6>QUESTIONS?</h6>
                  <h3 className="number mb-4 mb-md-0 align-left">888-887-4566</h3>
                </div>
                <div className="col-md-6">
                  <h6>PAYMENT METHODS</h6>
                  <img style={{width : "359" , height : "28"}} className='paymentimg' src="https://www.xautocare.com/wp-content/uploads/2020/06/payments-1.png" alt="" />
                </div>
              </div>
            </div>
            <div style={{paddingLeft: "4.2%" , marginBottom : "30px"}} className="col-lg-3">
              <h3 style={{marginBottom : "15px"}} >QUICK LINKS</h3>
              <div className="listdetails">
                <ul>
                  <li><i className="fa-solid fa-circle-check"></i> About Us</li>
                  <li><i className="fa-solid fa-circle-check"></i> Part Request</li>
                  <li><i className="fa-solid fa-circle-check"></i> Brands</li>
                  <li><i className="fa-solid fa-circle-check"></i> Contact Us</li>
                </ul>
              </div>
            </div>
            <div style={{paddingLeft: "4.2%" , marginBottom : "30px"}} className="col-lg-3">
              <h3 style={{marginBottom : "15px"}}>USEFUL LINKS</h3>
              <div className="listdetails">
                <ul>
                  <li><i className="fa-solid fa-circle-check"></i> Terms & Conditions</li>
                  <li><i className="fa-solid fa-circle-check"></i> Return Policy</li>
                  <li><i className="fa-solid fa-circle-check"></i> Privacy & Policy</li>
                  <li><i className="fa-solid fa-circle-check"></i> Warranty Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <hr/> */}
        <div className="footer_bottom container">
          <div className="footer_btm_l">
            <span>© X AutoCare 2020. All Rights Reserved</span>
          </div>
          <div className="footer_btm_r">
            <div className="social_media">
              <a href="https://www.facebook.com/xautocarellc/"><i className="fa-brands fa-facebook-f scl_icon" style={{lineHeight : "30px"}}></i></a>
              <a href="https://twitter.com/XAutoCareLLC/"><i className="fa-brands fa-twitter scl_icon" style={{lineHeight : "30px"}}></i></a>
              <a href="https://www.instagram.com/xautocarellc/"><i className="fa-brands fa-instagram scl_icon" style={{lineHeight : "30px"}}></i></a>
              <a href="https://www.linkedin.com/company/xautocare/"><i className="fa-brands fa-linkedin-in scl_icon" style={{lineHeight : "30px"}}></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Footer