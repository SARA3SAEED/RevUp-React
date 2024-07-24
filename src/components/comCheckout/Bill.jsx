import React, {  useEffect } from "react";
import { useSelector } from "react-redux";
import Nissan from "../../assets/Nissan.png";
import { GiCarDoor } from "react-icons/gi";
import { GiCarWheel } from "react-icons/gi";
import { GiCarSeat } from "react-icons/gi";
import { Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { NissanSkyline } from "../carModels/NissanSkyline";
import { Canvas, useFrame } from "@react-three/fiber";
import { useParams } from "react-router-dom";
import { Porsche911 } from "../carModels/Porsche911";
import { ToyotaSupra } from "../carModels/ToyotaSupra";
import { LotusEmira } from "../carModels/LotusEmira";
import rimdefult from "../../assets/rimDefult.png";

export default function Bill() {
  const carName = localStorage.getItem("displayName");
  const carid = localStorage.getItem("displayid");
  const bodyColor = useSelector((state) => state.carColors.carBodyColor);
  const chairColor = useSelector((state) => state.carColors.InteriorColor);
  const wheelColor = useSelector((state) => state.carColors.rimColor);
  const rimType = useSelector((state) => state.carColors.rimType);

  const arrayOfImages = [
    { id: 1, name: "Nissan -GTR",  price:"$115,000"},
    { id: 2, name: "Porsche 911",  price:"$115,000" },
    { id: 3, name: "Lotus -Emira",  price:"$85,000" },
    { id: 4, name: "Toyota Supra",  price:"$45,000" },
  ];

 
  const car = arrayOfImages.find((car) => car.name === carName);
  const carPriceString = car ? car.price : "Price not available";


   const carPriceNumber = parseFloat(carPriceString.replace(/[^0-9.-]+/g, ""));

   const bodyColorCost = 1000;
   const rimColorCost = 500;
   const seatColorCost = 750;
   
   const totalCost = carPriceNumber + bodyColorCost + rimColorCost + seatColorCost;
   
   const formattedTotalCost = `$${totalCost.toLocaleString()}`;

   useEffect(() => {
    localStorage.setItem("totalCost", formattedTotalCost);
  }, [formattedTotalCost]);

  return (
    <>
      <div className="px-4 pt-0 h-full">
        <p className="text-xl font-medium">Order Summary</p>
        <div className="mt-8 space-y-3 w-full rounded-lg border bg-base-100 px-2 py-4 sm:px-6">
          <Canvas
            camera={{
              fov: 22,
              position: [4.5, 1.6, 4.3],
            }}
          >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <directionalLight intensity={2} position={[1.83, -0.25, 0.93]} />
            <directionalLight intensity={2} position={[-1.97, -0.002, -0.97]} />
            {/* the car model */}
            {carid == 1 && <NissanSkyline />}
            {carid == 2 && <Porsche911 />}
            {carid == 3 && <LotusEmira />}
            {carid == 4 && <ToyotaSupra />}
            <OrbitControls
              autoRotate={true}
              enableZoom={false}
              enableRotate={false}
              autoRotateSpeed={1.2}
            />
          </Canvas>
          <h1 className="text-center text-xl font-semibold">{carName}</h1>
          <div className="flex flex-col w-full text-start gap-2">
            <ul className="pl-4 w-full">
              <li className="my-4 w-full justify-between flex flex-row items-center">
                <p className="text-info">Modifications:</p>
                <p className="text-info">Price</p>
              </li>
              <li className="my-4 w-full justify-between flex flex-row items-center">
                <div className="w-full flex gap-4 items-center">
                  <span className="bg-accent p-2 rounded-xl">
                    <GiCarDoor size={30} />
                  </span>
                  <div className="font-bold w-7 h-7 rounded-full shadow-lg overflow-hidden border-base-300 border">
                    <input
                      type="color"
                      className="w-20 h-20 -translate-x-1 -translate-y-2"
                      disabled
                      value={bodyColor}
                    />
                  </div>
                </div>
                <span className="font-bold">1000$</span>
              </li>
              <li className="my-4 w-full flex flex-row justify-between items-center">
                <div className="w-full flex gap-4 items-center">
                  <span className="bg-accent p-2 rounded-xl">
                    <GiCarWheel size={30} />
                  </span>
                  <div className="font-bold w-7 h-7 rounded-full shadow-lg overflow-hidden border-base-300 border">
                    <input
                      type="color"
                      className="w-20 h-20 -translate-x-1 -translate-y-2"
                      disabled
                      value={chairColor}
                    />
                  </div>
                  -
                  <div className="flex gap-2 items-center">
                    <img src={rimdefult} className="w-[30px] h-[30px]" />
                    <p className="text-sm">Rim-No.{rimType}</p>
                  </div>
                </div>
                <span className="font-bold">500$</span>
              </li>
              <li className="my-4 w-full flex flex-row justify-between items-center">
                <div className="w-full flex gap-4 items-center">
                  <span className="bg-accent p-2 rounded-xl">
                    <GiCarSeat size={30} />
                  </span>
                  <div className="font-bold w-7 h-7 rounded-full shadow-lg overflow-hidden border-base-300 border">
                    <input
                      type="color"
                      className="w-20 h-20 -translate-x-1 -translate-y-2"
                      disabled
                      value={wheelColor}
                    />
                  </div>
                </div>
                <span className="font-bold">750$</span>
              </li>
              <div className="flex justify-between">
                <p className="text-center text-lg font-bold mt-2">Price of car: <small>{carPriceString}</small></p>
                <p className="text-center text-lg font-bold mt-2">Total: <small>{formattedTotalCost}</small></p>
              </div>

            </ul>
          </div>
        </div>
       
      </div>
    </>
  );
}
