import type { User } from "../../hooks/useFetchUser/types";

export type UserStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};
