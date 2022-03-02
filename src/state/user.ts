import { StoreSlice, StoreState } from "./state";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { SetState } from "zustand";
import produce from "immer";

export type State = {
  form: RegisterForm;
  setForm: (form: RegisterForm) => void;
  userId: string;
  createUser: (email: string, password: string) => void;
};

type RegisterForm = {
  email: string;
  password: string;
  error: string;
};

type SetFormFn = (set: SetState<StoreState>, form: RegisterForm) => void;

const setForm: SetFormFn = (set, form) => {
  set(
    produce((state) => {
      state.user.form = form;
    })
  );
};

type CreateUserFn = (
  set: SetState<StoreState>,
  email: string,
  password: string
) => void;

const createUser: CreateUserFn = (set, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCreds) => {
      set(
        produce((state) => {
          state.user.userId = userCreds.user.uid;
        })
      );
    })
    .catch((err) => {
      set(
        produce((state) => {
          state.user.form.error = err.message;
        })
      );
    });
};

export const createState: StoreSlice<State> = (set, get) => ({
  form: {
    email: "",
    password: "",
    error: "",
  },
  userId: "",
  setForm: (form) => setForm(set, form),
  createUser: (email, password) => createUser(set, email, password),
});
