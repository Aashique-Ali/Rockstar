import React from "react"
import GTAbanner from "../assets/GTA.png"

const Card = ({
  bg,
  heading,
  p1,
  p2,
  width = "w-[2200px]",
  height = "h-[450px]",
  text = "text-2xl",
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className={`${width} ${height} bg-contain relative rounded-xl overflow-hidden`}
    >
      <div className=" absolute bottom-0 left-0 bg-black text-white w-[100%] py-5 px-4">
        <h1 className={`${text} font-semibold`}>{heading}</h1>
        <div className="flex justify-start items-center pt-4 text-xs gap-2 text-gray-500">
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
