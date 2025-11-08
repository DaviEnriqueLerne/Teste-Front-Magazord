import { useUserStore } from "../../store/userStore";

export function Profile() {
  const user = useUserStore((state) => state.user);

  return (
    user && (
      <div className="flex flex-col items-center text-center">
        <div className="relative w-24 h-24">
          <img src={user.avatar_url} className="w-24 h-24 rounded-full object-cover shadow-sm" />
          <span className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-xl bg-white rounded-full shadow p-1">{"😎"}</span>
        </div>
        <div className="mt-3">
          <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
        </div>
      </div>
    )
  );
}
