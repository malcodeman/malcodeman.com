"use client";
import { Highlight as ArkHighlight, HighlightProps } from "@ark-ui/react";

export function Highlight(props: HighlightProps) {
  return (
    <ArkHighlight
      {...props}
      className="rounded-[4px] bg-[#ffedd580] p-1 text-[#21201C] dark:bg-[#3b110680] dark:text-[#EEEEEC]"
    />
  );
}
