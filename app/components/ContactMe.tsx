import { LuMail } from "react-icons/lu";
import { SiGithub, SiDevdotto, SiDribbble } from "react-icons/si";
import { Button } from "@/ui/Button";
import { IconButton } from "@/ui/IconButton";
import { cn } from "@/lib/utils";

const LINKS = [
  {
    label: "Github",
    url: "https://github.com/malcodeman",
    icon: <SiGithub />,
  },
  {
    label: "Dev.to",
    url: "https://dev.to/malcodeman",
    icon: <SiDevdotto />,
  },
  {
    label: "Dribbble",
    url: "https://dribbble.com/malcodeman",
    icon: <SiDribbble />,
  },
];

function ContactMe() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center">
      <a href="mailto:malcodeman@gmail.com" className="mb-6 sm:mb-0 sm:mr-6">
        <Button className="w-full hover:scale-x-110 hover:scale-y-110">
          <LuMail />
          Contact me
        </Button>
      </a>
      <div className="flex justify-between sm:space-x-6">
        {LINKS.map((item) => (
          <a key={item.url} href={item.url} target="_blank">
            <IconButton
              aria-label={item.label}
              className={cn({
                "text-[#EA4C89] dark:text-[#EA4C89]":
                  item.url === "https://dribbble.com/malcodeman",
              })}
            >
              {item.icon}
            </IconButton>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactMe;
