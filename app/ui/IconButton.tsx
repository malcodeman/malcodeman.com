import { cn } from "@/lib/utils";

type Props = {
  variant?: "solid" | "ghost";
} & React.ComponentPropsWithoutRef<"button">;

export function IconButton(props: Props) {
  const { className, variant = "solid" } = props;

  return (
    <button
      {...props}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-[4px] text-[#21201C] transition-colors dark:text-[#EEEEEC]",
        className,
        {
          "bg-[#EFEEEC] dark:bg-[#232322]": variant === "solid",
          "hover:bg-[#EFEEEC] dark:hover:bg-[#232322]": variant === "ghost",
        },
      )}
    />
  );
}
