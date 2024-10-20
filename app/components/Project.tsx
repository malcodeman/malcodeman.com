import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

import { Project as ProjectType } from "../../types";
import { GridItem } from "./GridItem";
import { Heading } from "@/ui/Heading";
import { Text } from "@/ui/Text";
import { IconButton } from "@/ui/IconButton";

function Project(props: ProjectType) {
  const { url, title, description, picture, image, ...rest } = props;
  return (
    <a {...rest} href={url} target="_blank" rel="noreferrer">
      <GridItem className="relative flex h-full flex-col bg-[#F9F9F8] dark:bg-[#222221]">
        <IconButton className="absolute right-4 top-4 rounded-[20px] border border-[#E9E8E6] dark:border-[#2A2A28]">
          <FiExternalLink />
        </IconButton>
        <Heading level={2} className="text-2xl">
          {title}
        </Heading>
        <Text className="mb-4">{description}</Text>
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
      </GridItem>
    </a>
  );
}

export default Project;
