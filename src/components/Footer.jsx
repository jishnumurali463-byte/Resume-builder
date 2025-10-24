import React from 'react'
import { SiImessage } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'DarkSlateGray',color:'white'}} className='d-flex justify-content-center align-items-center p-5 flex-column'>
        <h3> Contact Us </h3>

        <h5 className="fw-bolder"><SiImessage /> Resumebuilder@gmail.com</h5>
        <h5 className="fw-bolder"><FaPhoneSquareAlt />9745285654</h5>
        <h4>Connect With Us</h4>
        <div className="d-flex justify-content-center fs-4 my-3">
            <FaWhatsapp className='me-3'/>
            < FaInstagram className='me-3'/>
            < FaFacebook/>


        </div>
        <p>Designed & built with 🤍 using React  </p>

    </div>
  )
}

export default Footer