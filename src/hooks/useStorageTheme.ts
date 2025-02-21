import LOCAL_STORAGE_KEYS from "../constants/keys/localStorage";

interface IStorageTheme {
  setBaseTheme: (value: string) => void;
  getBaseTheme: () => void;
  clearBaseName: () => void;
}

export const useStorageTheme: IStorageTheme = {
  setBaseTheme: (value: string) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, value);
  },
  getBaseTheme: () => {
    const currentTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.THEME);
    return String(currentTheme);
  },
  clearBaseName: () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.THEME);
  },
};
