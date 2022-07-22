import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project1 from "../public/assets/projects/crypto.jpg";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto py-16 px-8">
        <p className="text-xl tracking-widest uppercase text-[#5651e1]">
          Projects
        </p>
        <h2 className="py-6">What i've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems Project1={Project1} title="CryptoApp" tech="React" />
          <ProjectItems Project1={Project1} title="CryptoApp" tech="React" />
          <ProjectItems Project1={Project1} title="CryptoApp" tech="React" />
          <ProjectItems Project1={Project1} title="CryptoApp" tech="React" />

        </div>
      </div>
    </div>
  );
};

export default Projects;
