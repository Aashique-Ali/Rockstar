import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.png"
import { IoSearch } from "react-icons/io5"
import { MdOutlinePersonOutline } from "react-icons/md"
import { TiArrowSortedDown } from "react-icons/ti"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className="bg-[#020202] flex justify-between items-center md:px-28 px-10  pt-6 pb-5 ">
      <div className="flex justify-center items-center gap-5">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className="hidden text-xl md:flex justify-center items-center text-white gap-10 text-[15px] ">
            <NavLink>
              <li className="flex justify-center items-center">
                Jogos <TiArrowSortedDown />
              </li>
            </NavLink>
            <NavLink>
              <li>Loja</li>
            </NavLink>
            <NavLink>
              <li>Ajuda</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div>
          <button className="bg-yellow-500 py-2 font-medium px-5 rounded-lg  text-lg">
            Baixe o Launcher
          </button>
        </div>
        <div className="bg-gray-600 rounded-full p-3">
          <IoSearch size={20} color="white" />
        </div>
        <div className="bg-gray-600 rounded-full p-3">
          <MdOutlinePersonOutline size={20} color="white" />
        </div>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="block md:hidden cursor-pointer text-white"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden bg-[#ffd755] right-0 top-[15%] w-[60%] h-full bg-primary ease-in-out duration-500"
            : "w-[60%] fixed bg-[#ffd755] top-[10%] bottom-0 right-[-100%] ease-in-out duration-500"
        }
      >
        <li className="p-4  rounded-xl m-2 cursor-pointer duration-300 hover:text-white text-white">
          <NavLink>Jogos</NavLink>
        </li>
        <li className="p-4  rounded-xl m-2 cursor-pointer duration-300 hover:text-white text-white">
          <NavLink>Loja</NavLink>
        </li>
        <li className="p-4  rounded-xl m-2 cursor-pointer duration-300 hover:text-white text-white">
          <NavLink>Ajuda</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
