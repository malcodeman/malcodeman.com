import {
  siGithub,
  siDevdotto,
  siDribbble,
  siStackoverflow,
} from "simple-icons";

import SimpleIcon from "./SimpleIcon";

const LINKS = [
  {
    label: "Github",
    url: "https://github.com/malcodeman",
    icon: <SimpleIcon size={16} path={siGithub.path} />,
  },
  {
    label: "Dev.to",
    url: "https://dev.to/malcodeman",
    icon: <SimpleIcon size={16} path={siDevdotto.path} />,
  },
  {
    label: "Dribbble",
    url: "https://dribbble.com/malcodeman",
    icon: <SimpleIcon size={16} path={siDribbble.path} />,
  },
  {
    label: "Stackoverflow",
    url: "https://stackoverflow.com/users/14981767/malcodeman",
    icon: <SimpleIcon size={16} path={siStackoverflow.path} />,
  },
];

function ContactMe() {
  return (
    <div className="flex flex-col sm:items-center sm:flex-row">
      <a href="mailto:malcodeman@gmail.com">
        <button className="px-4 py-2 mb-6 sm:mb-0 sm:mr-6 w-full sm:w-auto font-semibold text-sm rounded-full bg-[#F28444] text-[#202126]">
          Contact me
        </button>
      </a>
      <div className="flex justify-between sm:space-x-6">
        {LINKS.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white dark:bg-[#202126]">
              {item.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactMe;
