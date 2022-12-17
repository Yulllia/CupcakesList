import { atom } from "recoil";

export const keyNavigate = atom({
  key: "gallery", // unique ID (with respect to other atoms/selectors)
  default: "gallery", // default value (aka initial value)
});
