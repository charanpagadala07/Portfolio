import React from "react";
import { CardSpotlight } from "./ui/CardSpotlight";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Resume = ({ id }: { id?: string }) => {
  const handleResumeClick = () => {
    window.open("/Resume.pdf", "_blank");
  };

  return (
    <div id={id} className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Resume</span>
      </h1>
      
      <div className="w-full mt-12 flex justify-center">
        <CardSpotlight className="max-w-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">View my Resume</h2>
            <p className="text-white-100 mb-6">
              A polished and well-structured resume created using Overleaf.
            </p>
            <MagicButton
              title="Resume"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={handleResumeClick}
            />
          </div>
        </CardSpotlight>
      </div>
    </div>
  );
};

export default Resume;