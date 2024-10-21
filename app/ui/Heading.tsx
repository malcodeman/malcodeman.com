import { cn } from "@/lib/utils";

type Props = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

export function Heading(props: Props) {
  const { level = 1, className } = props;
  const Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={cn(
        "text-3xl font-semibold text-[#21201C] dark:text-[#EEEEEC]",
        className,
      )}
    />
  );
}
