import React from "react"
import gameLauncher from "../assets/GameLauncher.png"
import Launcherpic from "../assets/Launcher.png"

const Launcher = () => {
  return (
    <div className="px-32 py-10 bg-gray-900">
      <div className=" py-8 pl-16 rounded-xl flex justify-between items-center bg-gradient-to-t from-[#eb5958] via-[#f18046] to-[#f6a452]">
        <div className="flex justify-center items-start flex-col gap-10">
          <img src={gameLauncher} alt="" />
          <h1 className="text-3xl font-semibold w-[280px]">
            Todos os seus jogos em um só lugar.
          </h1>
          <button className="bg-yellow-500 py-3  px-16 font-bold rounded  text-lg text-black">
            Donwload
          </button>
        </div>
        <div>
          <img src={Launcherpic} alt="" className="w-[550px]" />
        </div>
      </div>
    </div>
  )
}

export default Launcher
