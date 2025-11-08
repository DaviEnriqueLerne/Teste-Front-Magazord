import { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";
import { useUserStore } from "../../store/userStore";
import { RowAdditionalInformation } from "../RowAdditionalInformations";
import { FaBuilding, FaInstagram, FaLink } from "react-icons/fa6";
import type { ArrayToMap } from "./types";

export function AdditionalInformations() {
  const user = useUserStore((state) => state.user);

  const itemsUserAdditionalInformationsToMap = useRef<(ArrayToMap | null)[]>([]);

  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleToggle = () => {
    if (!isDesktop) setOpen((prev) => !prev);
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

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 744);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop) setOpen(true);
  }, [isDesktop]);

  return (
    haveAdditionalInformation &&
    user && (
      <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto font-sans">
        {!isDesktop && (
          <div className="flex flex-col items-center justify-center cursor-pointer select-none mb-3" onClick={handleToggle}>
            <h2 className="text-blue-500 font-medium text-lg sm:text-xl">Informações Adicionais</h2>
            <FaChevronDown className={`mt-1 text-blue-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`} size={18} />
          </div>
        )}
        {open && (
          <div className={` ${!isDesktop && `bg-gray-100 rounded-lg shadow-sm`} px-4 py-4 space-y-3`}>
            {itemsUserAdditionalInformationsToMap.current.map(
              (item, idx: number) => item?.title && <RowAdditionalInformation key={idx} title={item.title} icon={item.icon} />
            )}
          </div>
        )}
      </div>
    )
  );
}
