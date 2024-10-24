import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computer Applications"
            subTitle="Kerala Technical University (2018 - 2020)"
            des="I completed my Master of Computer Applications (MCA) with a CGPA of 7.13, providing me with a strong foundation in programming."
          />
          <ResumeCard
            title="Bachelor of Computer Applications"
            subTitle="Calicut University (2014 - 2017)"
            des="
              I completed my Bachelor of Computer Applications (BCA), which gave me a solid foundation in programming, software development, and IT fundamentals."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Government of Kerala (2012 - 2014)"
            des="
              I completed my Higher Secondary Education with a focus on science, which helped build my analytical and problem-solving skills before transitioning into the field of computer applications."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer Trainee"
            subTitle="MakBig - (2024 - Present)"
            des="Developed websites using Python(Django) and React.js, worked with REST APIs to ensure frontend and backend communication, deployed and managed websites on AWS EC2."
          />
          <ResumeCard
            title="React Native Developer Trainee"
            subTitle="Inmakes Infotech Pvt.Ltd- (2022 - 2023)"
            des="Completed an internship focusing on React Native to build cross platform applications. Gained experience in developing UI components and managing application state with React Native"
          />
          <ResumeCard
            title="Freelance Web Designer"
            subTitle="Self Employed - (2021 - 2022)"
            des="Designed responsive static websites using HTML, CSS and Bootstrap."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education