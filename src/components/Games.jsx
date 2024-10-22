import React from "react"
import GTA5 from "../assets/GTA 5.png"
import GTAOnline from "../assets/GTA online.png"
import RED from "../assets/RED.png"
import REDOnline from "../assets/RED online.png"

const Games = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-900 text-white py-16  px-20 gap-10">
      <div className="flex justify-center items-center gap-64  ">
        <h1 className="text-4xl font-bold">Jogos em Destaque</h1>
        <ul className="flex justify-center items-center gap-5 ">
          <li className="bg-gray-500 py-[2px] px-5 rounded-2xl">PC</li>
          <li className="bg-gray-500 py-[2px] px-5 rounded-2xl">Console</li>
          <li className="bg-gray-500 py-[2px] px-5 rounded-2xl">
            Dispositivos Portáteis
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-8 items-center ">
        <img src={GTA5} alt="" className="w-[230px]" />
        <img src={GTAOnline} alt="" className="w-[230px]" />
        <img src={RED} alt="" className="w-[230px]" />
        <img src={REDOnline} alt="" className="w-[230px]" />
      </div>
      <div>
        <button className="bg-yellow-500 py-3 font-medium px-8 rounded  text-lg text-black">
          Ver todos os jogos
        </button>
      </div>
    </div>
  )
}

export default Games
