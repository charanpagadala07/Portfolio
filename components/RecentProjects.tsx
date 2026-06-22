"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { Button } from "./ui/MovingBorders";

const RecentProjects = ({ id }: { id?: string }) => {
  return (
    <div id={id} className="py-20 w-full">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {projects.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 lg:col-span-2"
          >
            <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-4 h-full justify-between">
              <div className="flex lg:flex-row flex-col lg:items-center gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="lg:w-32 md:w-20 w-16 rounded-lg object-cover"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold text-sm">
                    {card.des}
                  </p>
                  <p className="text-start text-purple mt-4 font-medium text-xs md:text-sm">
                    Skillset used: {card.skillset}
                  </p>
                </div>
              </div>

              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-end gap-2 text-purple hover:text-purple-400 transition-colors duration-200 self-end"
              >
                <span className="text-sm font-medium">View Project</span>
                <FaLocationArrow size={14} />
              </a>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
