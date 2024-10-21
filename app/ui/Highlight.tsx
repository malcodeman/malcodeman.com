"use client";
import { Highlight as ArkHighlight, HighlightProps } from "@ark-ui/react";

export function Highlight(props: HighlightProps) {
  return (
    <ArkHighlight
      {...props}
      className="z-10 rounded-[4px] bg-[#eb5e411A] p-1 text-[#21201C] dark:text-[#EEEEEC]"
    />
  );
}
