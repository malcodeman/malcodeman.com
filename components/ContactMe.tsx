import {
  siGithub,
  siDevdotto,
  siDribbble,
  siStackoverflow,
} from "simple-icons/icons";

import SimpleIcon from "./SimpleIcon";

const LINKS = [
  {
    url: "https://github.com/malcodeman",
    icon: <SimpleIcon size={16} path={siGithub.path} />,
  },
  {
    url: "https://dev.to/malcodeman",
    icon: <SimpleIcon size={16} path={siDevdotto.path} />,
  },
  {
    url: "https://dribbble.com/malcodeman",
    icon: <SimpleIcon size={16} path={siDribbble.path} />,
  },
  {
    url: "https://stackoverflow.com/users/14981767/malcodeman",
    icon: <SimpleIcon size={16} path={siStackoverflow.path} />,
  },
];

function ContactMe() {
  return (
    <div className="flex flex-col sm:flex-row">
      <a href="mailto:malcodeman@gmail.com">
        <button className="px-4 py-2 mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto font-semibold text-sm rounded-full bg-[#F28444] text-white">
          Contact me
        </button>
      </a>
      <div className="flex justify-between sm:space-x-4">
        {LINKS.map((item) => (
          <a key={item.url} href={item.url} target="_blank" rel="noreferrer">
            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-white dark:bg-[#202126]">
              {item.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactMe;
