import type { RowAdditionalInformations } from "./types";

export function RowAdditionalInformation({ title, icon }: RowAdditionalInformations) {
  return (
    <div className="flex items-center text-blue-500 space-x-2">
      {icon}
      <span>{title}</span>
    </div>
  );
}
