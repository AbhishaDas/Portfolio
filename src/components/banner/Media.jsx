import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
        <a
            href="https://github.com/AbhishaDas" 
            target="_blank"
            rel="noopener noreferrer" 
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishadas-h/"
            target="_blank"
            rel="noopener noreferrer" 
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Media