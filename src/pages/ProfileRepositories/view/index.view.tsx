import { AdditionalInformations } from "../../../components/AdditionalInformations";
import { ContentSelector } from "../../../components/ContentSelector";
import { Profile } from "../../../components/Profile";

export function ProfileRepositoriesView() {
  return (
    <>
      <Profile />
      <AdditionalInformations />
      <ContentSelector />
    </>
  );
}
