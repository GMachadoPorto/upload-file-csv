import { createContext, useState } from "react";

interface iFileProviderProps {
  children: React.ReactNode;
}

interface iFileProvider {
  hasValidFile: boolean;
  toggleValidFile: () => void;
}

export const FileContext = createContext({} as iFileProvider);

export const FileProvider = ({ children }: iFileProviderProps) => {
  const [hasValidFile, setHasValidFile] = useState(false);

  const toggleValidFile = () => {
    setHasValidFile(!hasValidFile);
  };

  return (
    <FileContext.Provider value={{ hasValidFile, toggleValidFile }}>
      {children}
    </FileContext.Provider>
  );
};
