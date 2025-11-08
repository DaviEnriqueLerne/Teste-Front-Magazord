import { useMemo, useRef, useState } from "react";
import { FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";
import { useUserStore } from "../../store/userStore";
import { RowAdditionalInformation } from "../RowAdditionalInformations";
import { FaBuilding, FaInstagram, FaLink } from "react-icons/fa6";
import type { ArrayToMap } from "./types";

export function AdditionalInformations() {
  const user = useUserStore((state) => state.user);

  const itemsUserAdditionalInformationsToMap = useRef<(ArrayToMap | null)[]>([]);

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const haveAdditionalInformation: boolean = useMemo(() => {
    if (user) {
      if (!user.company && !user.location && !user.blog && !user.twitter_username) return false;
      itemsUserAdditionalInformationsToMap.current = [
        { icon: <FaBuilding />, title: user.company },
        { icon: <FaMapMarkerAlt />, title: user.location },
        { icon: <FaLink />, title: user.blog },
        { icon: <FaInstagram />, title: user.twitter_username },
      ];
    }
    return true;
  }, [user]);

  return (
    haveAdditionalInformation &&
    user && (
      <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto font-sans">
        <div className="flex flex-col items-center justify-center cursor-pointer select-none" onClick={handleToggle}>
          <h2 className="text-blue-500 font-medium text-lg sm:text-xl">Informações Adicionais</h2>
          <FaChevronDown className={`mt-1 text-blue-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`} size={18} />
        </div>
        {open && (
          <div className="mt-3 bg-gray-100 rounded-lg shadow-sm px-4 py-4 space-y-3">
            {itemsUserAdditionalInformationsToMap.current.map(
              (item, idx: number) => item?.title && <RowAdditionalInformation key={idx} title={item.title} icon={item.icon} />
            )}
          </div>
        )}
      </div>
    )
  );
}
