import React from "react"
import Card from "./Card"
import GTAbanner from "../assets/GTA.png"
import rock from "../assets/rock.png"
import car from "../assets/car.png"

const Category = () => {
  return (
    <div className="py-10 bg-gray-900 flex justify-center items-center  px-28">
      <Card
        bg={GTAbanner}
        heading={"Grand Theft Auto VI - Veja o 1º trailer agora"}
        p1={"Rockstar Games"}
        p2={"5 de dezembro de 2023"}
      />

      <div className="flex flex-col items-center w-full h-full gap-8">
        <Card
          bg={rock}
          heading={"Grand Theft Auto VI - Veja o 1º trailer agora"}
          p1={"Rockstar Games"}
          p2={"5 de dezembro de 2023"}
          width="w-[250px]"
          height="h-[210px]"
          text="text-xs"
        />
        <Card
          bg={car}
          heading={"Grand Theft Auto VI - Veja o 1º trailer agora"}
          p1={"Rockstar Games"}
          p2={"5 de dezembro de 2023"}
          width="w-[250px]"
          height="h-[210px]"
          text="text-xs"
        />
      </div>
    </div>
  )
}

export default Category
