import { useContext } from "react";
import { FileContext } from "../contexts";

export const useFileHook = () => {
  const fileContext = useContext(FileContext);

  return fileContext;
};
