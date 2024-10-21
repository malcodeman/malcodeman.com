import { Variant } from "../../types";

export function getProjects(variant: Variant) {
  return [
    {
      url: "https://www.resumebuilder.dev",
      title: "resumebuilder.dev",
      description:
        "Privacy-focused and login-free resume builder for developers.",
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
    {
      url: "https://www.lurkstation.com",
      title: "lurkstation.com",
      description: "Content oriented reddit client.",
      picture: [
        {
          srcSet: `/lurkstation_com_macbook_${variant}.webp`,
          media: "(min-width: 1024px)",
          height: 2520,
          width: 4072,
        },
      ],
      image: {
        src: `/lurkstation_com_iphone_${variant}.webp`,
        height: 2028,
        width: 1059,
      },
    },
  ];
}
