export type Project = {
  url: string;
  title: string;
  description?: string;
  picture: {
    srcSet: string;
    media: string;
    height: number;
    width: number;
  }[];
  image: {
    src: string;
    height: number;
    width: number;
  };
};

export type SimpleIcon = {
  size?: number;
  color?: string;
  path: string;
};

export type Variant = "dark" | "light";

export type ErrorComponent = {
  error: Error;
  reset: () => void;
};
