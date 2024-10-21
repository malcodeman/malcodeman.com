"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hookz/web";

import Project from "./Project";
import { getProjects } from "@/lib/getProjects";
import { Project as ProjectType } from "../../types";

function Projects() {
  const colorMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [projects, setProjects] = useState<ProjectType[]>(getProjects("light"));

  useEffect(() => {
    if (colorMode !== undefined) {
      setProjects(getProjects(colorMode ? "dark" : "light"));
    }
  }, [colorMode]);

  return (
    <div
      id="projects"
      className="container mx-auto mb-5 grid gap-5 px-5 sm:grid-cols-[1fr_1fr]"
    >
      {projects.map((item) => (
        <Project
          key={item.url}
          url={item.url}
          title={item.title}
          description={item.description}
          picture={item.picture}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Projects;
