import { SimpleIcon as SimpleIconType } from "@/types";

function SimpleIcon(props: SimpleIconType) {
  const { size = 24, color = "currentColor", path, ...rest } = props;
  return (
    <svg
      {...rest}
      width={size}
      height={size}
      fill={color}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
}

export default SimpleIcon;
