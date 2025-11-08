import { AdditionalInformations } from "../../../components/AdditionalInformations";
import { ContentSelector } from "../../../components/ContentSelector";
import { Navbar } from "../../../components/NavBar";
import { Profile } from "../../../components/Profile";

export function ProfileRepositoriesView() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10 md:max-w-6xl md:mx-auto md:px-6 p-2 sm:p-3 md:p-4 lg:p-6">
        <div className="flex flex-col items-center md:items-start md:w-1/3 lg:w-1/4">
          <Profile />
          <div className="mt-6 w-full">
            <AdditionalInformations />
          </div>
        </div>
        <div className="flex-1 w-full md:w-2/3 lg:w-3/4">
          <ContentSelector />
        </div>
      </div>
    </div>
  );
}
