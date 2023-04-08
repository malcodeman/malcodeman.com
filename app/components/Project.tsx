import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

import { Project as ProjectType } from "../../types";

function Project(props: ProjectType) {
  const { url, bgColor, title, description, picture, image, ...rest } = props;
  return (
    <a {...rest} href={url} target="_blank" rel="noreferrer">
      <div
        className="flex flex-col p-8 rounded-lg h-full dark:text-white relative"
        style={{ backgroundColor: bgColor }}
      >
        <div className="p-2 flex rounded-full absolute top-4 right-4 text-[#202126] bg-[#A7D5F2]">
          <FiExternalLink />
        </div>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-sm mb-4 opacity-80">{description}</p>
        <picture className="rounded-lg object-cover mt-auto">
          {picture.map((picture) => (
            <source
              key={picture.srcSet}
              srcSet={picture.srcSet}
              media={picture.media}
              height={picture.height}
              width={picture.width}
            />
          ))}
          <Image
            src={image.src}
            alt=""
            className="rounded-lg object-cover mt-auto"
            height={image.height}
            width={image.width}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 768px, 1024px"
            priority
          />
        </picture>
      </div>
    </a>
  );
}

export default Project;
