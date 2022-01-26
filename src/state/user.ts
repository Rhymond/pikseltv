import {StoreSlice} from "./state";

export type State = {
    name: string
    setName: (name: string) => void
}

export const createState: StoreSlice<State> = (set, get) => ({
    name: "",
    setName: name => set(state => ({
        user: {
            ...state.user,
            name: name,
        }
    }))
})
