import { atom } from "recoil";

export const showFullTextAtom = atom<boolean>({
  key: "showFullText",
  default: false,
});
