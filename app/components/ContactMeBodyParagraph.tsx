"use client";
import { useTheme } from "next-themes";
import { Text } from "@/ui/Text";
import { cn } from "@/lib/utils";

export function ContactMeBodyParagraph() {
  const { theme } = useTheme();

  return (
    <Text>
      I like running 🏃‍♂️, hiking ⛰️ and writing code in{" "}
      <span
        className={cn({
          "line-through": theme === "light",
        })}
      >
        dark theme
      </span>{" "}
      🌙.
    </Text>
  );
}
