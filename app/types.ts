export type Project = {
  url: string;
  title: string;
  description?: string;
  imageSrc: string;
};

export type SimpleIcon = {
  size?: number;
  color?: string;
  path: string;
};

export type ErrorComponent = {
  error: Error;
  reset: () => void;
};
