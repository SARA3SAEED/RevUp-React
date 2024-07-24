import React from "react";
import {
  SiHonda,
  SiToyota,
  SiNissan,
  SiMercedes,
  SiPorsche,
} from "react-icons/si";

export default function Brand() {
  return (
    <>
      <section className="bg-base-100 ">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex gap-5 lg:grid lg:gap-8  lg:grid-cols-5">
            <div className="flex items-center justify-center ">
              <SiToyota size={70} color="gray" />
            </div>
            <div className="flex items-center justify-center ">
              <SiNissan size={70} color="gray" />
            </div>
            <div className="flex items-center justify-center ">
              <SiMercedes size={60} color="gray" />
            </div>
            <div className="flex items-center justify-center ">
              <SiPorsche size={60} color="gray" />
            </div>
            <div className="flex items-center justify-center ">
              <SiHonda size={70} color="gray" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
