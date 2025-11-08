import { useEffect, useState } from "react";
import { UserModalSearchRepos } from "../../../components/UserModalSearchRepos";
import { ProfileRepositoriesView } from "../view/index.view";
import { useUserDataQuery } from "../../../hooks/useFetchUser";
import { useRepositoriesDataQuery } from "../../../hooks/useFetchRepositories";
import { useUserStore } from "../../../store/userStore";
import { repoStore } from "../../../store/reposStore";

export function ProfileRepositoriesController() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("DaviEnriqueLerne");

  const { data: userData, isLoading: isLoadingUser, isError: isErrorUser } = useUserDataQuery(user);
  const { data: userStarred, isLoading: isLoadingStarred, isError: isErrorStarred } = useRepositoriesDataQuery(user, "starred");
  const { data: userRepos, isLoading: isLoadingRepos, isError: isErrorDataQuery } = useRepositoriesDataQuery(user, "repos");

  const isLoading = isLoadingUser && isLoadingStarred && isLoadingRepos;
  const isError = isErrorUser || isErrorStarred || isErrorDataQuery;
  const hasData = userData !== null || userStarred !== null || userRepos !== null;

  const setUserStore = useUserStore((state) => state.setUser);
  const setReposStore = repoStore((state) => state.setRepo);
  const setStarredStore = repoStore((state) => state.setStarred);

  useEffect(() => {
    if (userData && userStarred && userRepos) {
      setUserStore(userData);
      setStarredStore(userStarred);
      setReposStore(userRepos);
    }
  });

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 bg-linear-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition"
        >
          Change User
        </button>
      )}
      <UserModalSearchRepos
        isOpen={open}
        onClose={() => setOpen(false)}
        onSearch={setUser}
        isLoading={isLoading}
        isError={isError}
        hasData={hasData}
      />
      <ProfileRepositoriesView />
    </>
  );
}
