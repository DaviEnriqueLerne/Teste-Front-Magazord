import { useUserStore } from "../../store/userStore";

export function Profile() {
  const user = useUserStore((state) => state.user);

  return (
    user && (
      <div className="flex flex-col items-center text-center px-4 py-6">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28">
          <img src={user.avatar_url} className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-sm border border-gray-200" />
          <span className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-lg sm:text-xl bg-white rounded-full shadow p-1">😎</span>
        </div>
        <div className="mt-3">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{user.name}</h3>
        </div>
        <div className="mt-1 max-w-xs sm:max-w-sm">
          <h3 className="text-sm sm:text-base text-gray-500 leading-snug">{user.bio}</h3>
        </div>
      </div>
    )
  );
}
