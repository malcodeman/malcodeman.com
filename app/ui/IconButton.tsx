import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"button">;

export function IconButton(props: Props) {
  const { className } = props;

  return (
    <button
      {...props}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#EFEEEC] text-[#21201C] dark:bg-[#232322] dark:text-[#EEEEEC]",
        className,
      )}
    />
  );
}
