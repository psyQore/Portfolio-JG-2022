import Image from "next/image";
import React from "react";
import htmlLogo from "../public/assets/skills/html.png";
import cssLogo from "../public/assets/skills/css.png";
import jsLogo from "../public/assets/skills/javascript.png";
import reactLogo from "../public/assets/skills/react.png";
import tailwindLogo from '../public/assets/skills/tailwind.png'
import nodeLogo from '../public/assets/skills/node.png'
import mongoLogo from '../public/assets/skills/mongo.png'
import githubLogo from '../public/assets/skills/github1.png'

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 py-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full px-6">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4"> What i Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={htmlLogo} alt="logo" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={cssLogo} alt="logo" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={jsLogo} alt="logo" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reactLogo} alt="logo" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tailwindLogo} alt="logo" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nodeLogo} alt="logo" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nodejs</h3>
              </div>
            </div>
          </div>

          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mongoLogo} alt="logo" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Mongo</h3>
              </div>
            </div>
          </div>

          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={githubLogo} alt="logo" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
