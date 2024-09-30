import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

import { Project as ProjectType } from "../../types";

function Project(props: ProjectType) {
  const { url, bgColor, title, description, picture, image, ...rest } = props;
  return (
    <a {...rest} href={url} target="_blank" rel="noreferrer">
      <div
        className="relative flex h-full flex-col rounded-lg p-8 dark:text-white"
        style={{ backgroundColor: bgColor }}
      >
        <div className="absolute right-4 top-4 flex rounded-full bg-[#A7D5F2] p-2 text-[#202126]">
          <FiExternalLink />
        </div>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="mb-4 text-sm opacity-80">{description}</p>
        <picture className="mt-auto rounded-lg object-cover">
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
            className="mt-auto rounded-lg object-cover"
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
