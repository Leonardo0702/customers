import { Outlet } from "react-router-dom";
import { useStorageTheme } from "../../../hooks/useStorageTheme";
import { useTheme } from "../../../store/useTheme";
import * as S from "./styles";

export const Entry: React.FC = () => {
  const { toggleTheme } = useTheme();
  const currentTheme = useStorageTheme.getBaseTheme();

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.ContentImageMenu>
          <S.ContainerImage>
            <S.HeaderImage brand={""} />
          </S.ContainerImage>
        </S.ContentImageMenu>
        <S.ContainerTheme>
          <button>mudar tema</button>
        </S.ContainerTheme>
      </S.HeaderContainer>
      <Outlet />
    </S.Container>
  );
};
