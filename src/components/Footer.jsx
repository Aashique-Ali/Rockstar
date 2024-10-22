import React from "react"
import footerLogo from "../assets/footer.png"
import { IoLogoInstagram } from "react-icons/io5"
import { IoLogoTwitter } from "react-icons/io5"
import { FaYoutube } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="flex justify-between items-center py-20 px-28 bg-[#020202] text-white">
      <div className="flex  gap-5">
        <div>
          <img src={footerLogo} alt="" />
        </div>
        <div className="flex  flex-col text-gray-400 gap-2">
          <ul className="flex  gap-5 font-semibold uppercase">
            <li>contato</li>
            <li>sobre</li>
            <li>suporte</li>
            <li>empregos</li>
          </ul>
          <div className="flex  items-center text-xs ">
            <p>©2023 Rockstar Games, Inc.</p>
            <p> - YWR Studio. </p>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <IoLogoInstagram size={25} />
        <IoLogoTwitter size={25} />
        <FaYoutube size={25} />
        <FaFacebook size={25} />
      </div>
    </div>
  )
}

export default Footer
