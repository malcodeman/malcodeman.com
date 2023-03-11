import { FiExternalLink } from "react-icons/fi";

type props = {
  url: string;
  bgColor: string;
  title: string;
  description?: string;
  picture: {
    srcSet: string;
    media: string;
  }[];
  image: string;
};

function Project(props: props) {
  const { url, bgColor, title, description, picture, image, ...rest } = props;

  return (
    <a {...rest} href={url} target="_blank" rel="noreferrer">
      <div
        className={`flex flex-col p-8 rounded-lg h-full dark:text-white relative ${bgColor}`}
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
            />
          ))}
          <img src={image} alt="" className="rounded-lg object-cover mt-auto" />
        </picture>
      </div>
    </a>
  );
}

export default Project;
