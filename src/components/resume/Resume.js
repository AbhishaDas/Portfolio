import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My Resume" />
      </div>
      <div>
        {/* Adjusted grid and centered text */}
        <ul className="w-full grid grid-cols-2 justify-center text-center">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
            }}
            className={`cursor-pointer ${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education & Experience
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
            }}
            className={`cursor-pointer ${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {/* Render corresponding sections */}
      <div className="text-center">
        {educationData && <Education />}
        {skillData && <Skills />}
      </div>
    </section>
  );
};

export default Resume;
