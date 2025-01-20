import { cn } from "@/lib/cn";

export default function Loader({ extraClasses }: { extraClasses?: string }) {
  return (
    <span
      className={cn(
        "h-8 w-8 rounded-full",
        "border-2 border-greyish border-t-transparent",
        "animate-spin",
        extraClasses
      )}
      aria-hidden="true"
    />
  );
}
