import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProManager from "../public/assets/projects/manager.png";
import ProControl from "../public/assets/projects/control.png";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div id="projects" className="w-full pt-10">
      <div className="max-w-[1240px] mx-auto py-16 px-8">
        <p className="text-xl tracking-widest uppercase text-[#5651e1]">
          Projects
        </p>
        <h2 className="py-6">What i've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            Project1={ProManager}
            title="Manager Patients App"
            tech="React"
            projectUrl="manager"
          />
          <ProjectItems
            Project1={ProControl}
            title="Control Expense"
            tech="React"
            projectUrl="control"
          />
          <ProjectItems Project1={ProManager} title="CryptoApp" tech="React" />
          <ProjectItems Project1={ProManager} title="CryptoApp" tech="React" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
