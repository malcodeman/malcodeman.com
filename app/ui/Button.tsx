import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"button">;

export function Button(props: Props) {
  const { className } = props;

  return (
    <button
      {...props}
      className={cn(
        "flex items-center justify-center gap-1 rounded-[4px] bg-[#ffedd5] px-4 py-1.5 text-base font-semibold text-[#92310a] transition-all hover:bg-[#fed7aa] dark:bg-[#3b1106] dark:text-[#fdba74] dark:hover:bg-[#6c2710]",
        className,
      )}
    />
  );
}
