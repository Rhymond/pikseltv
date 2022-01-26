import create, { SetState, GetState } from 'zustand';
import { State as UserState, createState as createUserState } from "./user";

type StoreState = {
    user: UserState
};

export type StoreSlice<T> = (
    set: SetState<StoreState>,
    get: GetState<StoreState>
) => T;

export const useStore = create<StoreState>((set, get) => ({
    user: createUserState(set, get),
}))

