import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="StyleHive"
          des=" E-commerce site developed with a focus on featuring a user-friendly interface and optimized for seamless shopping experiences."
          src={projectOne}
        />
        <ProjectsCard
          title="Swapify"
          des=" A sustainable e-commerce platform that enables users to easily swap products, promoting reuse and reducing waste."
          src={projectTwo}
        />
        <ProjectsCard
          title="LearnTech"
          des=" A comprehensive platform designed to enhance tech learning, offering a wide range of resources and courses to help users develop their skills in various technology fields."
          src={projectThree}
        />
        <ProjectsCard
          title="Netflix CLONE"
          des="  Website that replicates the core features of Netflix"
          src={projectFour}
        />
        <ProjectsCard
          title="Gourmet Greens"
          des="Designed the Gourmet Greens landing page using HTML, CSS, and Bootstrap, creating a clean, responsive, and user-friendly interface that highlights the brand’s fresh and organic offerings."
          src={projectFive}
        />
        <ProjectsCard
          title="SIMS"
          des="Scalable Inventory Management System (SIMS) is an online doctors appointment scheduling system"
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects