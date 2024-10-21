import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"div">;

export function GridItem(props: Props) {
  const { className } = props;

  return (
    <div
      {...props}
      className={cn(
        "rounded-[20px] border border-[#E9E8E6] p-5 dark:border-[#2A2A28]",
        className,
      )}
    />
  );
}
