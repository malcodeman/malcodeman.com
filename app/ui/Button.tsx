import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"button">;

export function Button(props: Props) {
  const { className } = props;

  return (
    <button
      {...props}
      className={cn(
        "flex items-center justify-center gap-1 rounded-[4px] bg-[#EB5E41] px-4 py-1.5 text-base font-semibold text-white",
        className,
      )}
    />
  );
}
