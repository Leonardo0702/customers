import { useBaseName } from "../hooks/useBasename";

const { pathName } = useBaseName;

export const ROUTES = {
  BASE: pathName(""),
  HOME: pathName("/home"),
};
