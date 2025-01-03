import { LuExternalLink } from "react-icons/lu";
import { Project as ProjectType } from "@/types";
import { GridItem } from "./GridItem";
import { Heading } from "@/ui/Heading";
import { Text } from "@/ui/Text";
import { IconButton } from "@/ui/IconButton";

function Project(props: ProjectType) {
  const { url, title, description, imageSrc, ...rest } = props;
  return (
    <a {...rest} href={url} target="_blank" rel="noreferrer">
      <GridItem className="relative flex h-full flex-col bg-[#F9F9F8] dark:bg-[#222221]">
        <IconButton
          aria-label="External link"
          className="absolute right-4 top-4 rounded-[20px] border border-[#E9E8E6] dark:border-[#2A2A28]"
        >
          <LuExternalLink />
        </IconButton>
        <Heading level={2} className="text-2xl">
          {title}
        </Heading>
        <Text className="mb-4">{description}</Text>
        <picture className="mt-auto aspect-video">
          <source srcSet={imageSrc[1]} media="(min-width: 640px)" />
          <img src={imageSrc[0]} alt="" />
        </picture>
      </GridItem>
    </a>
  );
}

export default Project;
