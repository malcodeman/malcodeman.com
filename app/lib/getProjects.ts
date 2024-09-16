import { Variant } from "../../types";

export function getProjects(variant: Variant) {
  return [
    {
      url: "https://www.resumebuilder.dev",
      title: "resumebuilder.dev",
      description:
        "Privacy-focused and login-free resume builder for developers.",
      bgColor: "#818C3080",
      picture: [
        {
          srcSet: `/resume_builder_dev_macbook_${variant}.webp`,
          media: "(min-width: 1024px)",
          height: 2520,
          width: 4072,
        },
      ],
      image: {
        src: `/resume_builder_dev_iphone_${variant}.webp`,
        height: 2028,
        width: 1059,
      },
    },
  ];
}
