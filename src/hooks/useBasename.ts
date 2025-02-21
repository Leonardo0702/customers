import LOCAL_STORAGE_KEYS from "../constants/keys/localStorage";

interface IBasenNameProps {
  pathName: (path: string) => string;
  setBaseName: () => void;
  clearBaseName: () => void;
}

export const useBaseName: IBasenNameProps = {
  pathName: (path: string) => {
    const basename = import.meta.env.VITE_PUBLIC_URL;
    if (basename) return `${basename}${path}`;
    return path;
  },
  setBaseName: () => {
    const basename = import.meta.env.VITE_PUBLIC_URL ?? "";
    localStorage.setItem(LOCAL_STORAGE_KEYS.BASENAME, basename);
  },
  clearBaseName: () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.BASENAME);
  },
};
