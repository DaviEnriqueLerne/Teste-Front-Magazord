import type { RowAdditionalInformations } from "./types";

export function RowAdditionalInformation({ title, icon }: RowAdditionalInformations) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 text-blue-500 text-sm sm:text-base">
      <span className="flex items-center justify-center text-lg sm:text-xl">{icon}</span>
      <span className="truncate">{title}</span>
    </div>
  );
}
