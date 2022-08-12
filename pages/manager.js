import Image from "next/image";
import Link from "next/link";
import React from "react";
import projectImg from "../public/assets/projects/manager.png";
import { RiRadioButtonFill } from "react-icons/ri";

const manager = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectImg}
          alt="image project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%]  translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Manager Patients App</h2>
          <h3>React / Tailwind / LocalStorage</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This application was built using React, Tailwindcss and
            LocalStorage. Users are able to create an appointment to later save
            it and be able to edit or delete it. Also the data will persist as
            it is stored in localstorage of the browser.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="https://manager-patients-app.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a href="https://github.com/psyQore/Patients-Manager" target="_blank" rel="noreferrer">Code</a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technology</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JS-ES6
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React-Icons
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Strapi
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Css
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">← Back Projects</p>
        </Link>
      </div>
    </div>
  );
};

export default manager;
