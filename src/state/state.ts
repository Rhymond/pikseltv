import create, { GetState, SetState } from "zustand";
import { createState as createUserState, State as UserState } from "./user";

type StoreState = {
  user: UserState;
};

export type StoreSlice<T> = (
  set: SetState<StoreState>,
  get: GetState<StoreState>
) => T;

export const useStore = create<StoreState>((set, get) => ({
  user: createUserState(set, get),
}));
