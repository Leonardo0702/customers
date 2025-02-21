import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useBaseName } from "../hooks/useBasename";
import { ROUTES } from "./settings";
import { useEffect } from "react";
import { Entry } from "../components/template/Entry";
import { ContentOutlet } from "../components/atoms/ContentOutlet/styles";
import { Home } from "../pages/private/Home";

export const Routes: React.FC = () => {
  const { setBaseName } = useBaseName;

  useEffect(() => {
    setBaseName();
  }, [setBaseName]);

  const routes = createBrowserRouter([
    {
      path: "*",
      element: <Navigate replace to={ROUTES.HOME} />,
    },
    {
      path: ROUTES.BASE,
      element: <Entry />,
      children: [
        {
          path: ROUTES.BASE,
          element: (
            <ContentOutlet isOpen={true}>
              <Home />,
            </ContentOutlet>
          ),
        },
        {
          element: (
            <ContentOutlet isOpen={true}>
              <Outlet />
            </ContentOutlet>
          ),
          children: [
            {
              path: ROUTES.HOME,
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};
