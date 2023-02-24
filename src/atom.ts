import { atom } from "recoil";

export const showFullTextAtom = atom<boolean>({
  key: "showFullText",
  default: false,
});

export const windowDimentionAtom = atom({
  key: "windowSize",
  default: window.innerWidth,
});
