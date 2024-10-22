import React from "react"
import GTABanner from "..//assets/GTA 6 banner.png"

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${GTABanner})` }}
      className="h-[120vh] w-[100%] bg-cover"
    ></div>
  )
}

export default Hero
